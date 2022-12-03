const rp = require('request-promise');
const config = require('../../../config');

async function verify({ code }) {
  const data = await rp(config.GITHUB_ACCESS_URI, {
    method: "POST",
    body: {
      client_id: config.GITHUB_CLIENT_ID,
      client_secret: config.GITHUB_CLIENT_SECRET,
      code,
    },
    json: true,
  });
  const userData = await rp("https://api.github.com/user", {
    method: "GET",
    headers: {
      "User-Agent": "Awesome-Octocat-App",
      Authorization: `Bearer ${data.access_token}`
    },
    json: true,
  });
  return { username: userData.login };
}

module.exports = verify;
