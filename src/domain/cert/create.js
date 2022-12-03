const config = require('../../../config');
const { ethers } = require('ethers');
const Contract = require('../contract');

async function create({ nonce, username, address, contractAddress }) {
  let privateKey = config.TRUSTED_SETUP_PRIVATE_KEY;
  let wallet = new ethers.Wallet(privateKey);
  const contractInstance = new Contract(contractAddress);
  const message = await contractInstance.getMessageHash(address, username, nonce);
  const signature = await wallet.signMessage(message);
  console.log({ nonce, username, address, signature });
  return { nonce, username, address, signature };
}

module.exports = create;
