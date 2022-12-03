const { ethers } = require('ethers');

async function verifySignature({ address, message, signature }) {
  const adr = await ethers.utils.verifyMessage(message, signature);
  return adr.toLowerCase() === address.toLowerCase();
}

async function verify({
  address,
  message,
  signature,
}) {
  const isSignatureValid = await verifySignature({
    address,
    message,
    signature,
  });
  if (!isSignatureValid) {
    return ErrorHandler.throwError({
      code: 400,
      message: `Signature is not valid for address: ${address}`,
    });
  }
  return { address: address };
}

module.exports = verify;
