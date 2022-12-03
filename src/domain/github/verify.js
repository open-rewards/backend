const rp = require('request-promise');
const config = require('../../../config');

async function verify({ accessToken }) {
  const userData = await rp("https://api.github.com/user", {
    method: "GET",
    headers: {
      "User-Agent": "Awesome-Octocat-App",
      Authorization: `Bearer ${accessToken}`
    },
    json: true,
  });
  return { username: userData.login };
}

module.exports = verify;
