const snoowrap = require('snoowrap');
const CONFIG = require('./config');

(async function() {
  const r = new snoowrap(CONFIG.SNOOWRAP);
  r.config({ requestDelay: 1000 });

  const page = await r
    .getSubreddit('UniversalScammerList')
    .getWikiPage('banlist')
    .fetch();
  const sub = await r.getSubreddit(CONFIG.SUBREDDIT);

  for (let line of page.content_md.split('\n')) {
    const user = line
      .trim()
      .substr(5)
      .split(' ')[0]
      .split('#')[0];

    if (!user) continue;

    try {
      await sub.banUser({ name: user });
      console.log('Banned', user);
    } catch (err) {
      console.error('Could not ban user', user, err);
    }
  }
})();
