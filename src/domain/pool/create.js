const { Log } = require('../../infra/database/models');

async function create({
  repoUrl,
  repoName,
  contributors,
  stars,
  username,
  userAddress,
  contractAddress,
  safeContractAddress,
}) {
  const logs = await new Log({
    repoUrl,
    repoName,
    contributors,
    stars,
    username,
    userAddress,
    contractAddress,
    safeContractAddress,
  }).save();
  return logs.safeObject();
}

module.exports = create;
