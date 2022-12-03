const { Log } = require('../../infra/database/models');

async function get({ userAddress }) {
    const criteria = {};
    if (userAddress) {
        criteria.userAddress = userAddress;
    }
  const logs = await Log.find(criteria).lean();
  return logs;
}

module.exports = get;
