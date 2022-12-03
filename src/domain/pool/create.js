const { Log } = require('../../infra/database/models');

async function create({
  repoUrl,
  repoName,
  contributors,
  stars,
  username,
  userAddress,
  contractAddresss,
  safeContractAddress,
}) {
  const logs = await new Log({
    repoUrl,
    repoName,
    contributors,
    stars,
    username,
    userAddress,
    contractAddresss,
    safeContractAddress,
  }).save();
  return logs.safeObject();
}

module.exports = create;
