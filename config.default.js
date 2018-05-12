const package = require('./package.json');

module.exports = {
  SUBREDDIT: '',
  SNOOWRAP: {
    clientSecret: '',
    userAgent: `reddit-banhammer v${package.version}`,
    clientId: '',
    username: '',
    password: ''
  }
};
