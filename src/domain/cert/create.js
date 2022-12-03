const config = require('../../../config');
const { ethers } = require('ethers');
const Contract = require('../contract');

async function create({ nonce, username, address, contractAddress }) {
  let privateKey = config.TRUSTED_SETUP_PRIVATE_KEY;
  let wallet = new ethers.Wallet(privateKey);
  const contractInstance = new Contract(contractAddress);
  const message = contractInstance.getMessageHash(address, username, nonce);
  const signature = await wallet.signMessage(message);
  return { nonce, username, address, signature };
}

module.exports = create;
