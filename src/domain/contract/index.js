const abi = require('./abi.json');
const { ethers } = require("ethers");

class OpenRewardsContract {
    constructor(contractAddress) {
        this.contractAddress = contractAddress;
        this.contractABI = abi;
        this.networkProviderUrl = config.ALCHEMY_RPC_URL;
        this.networkProvider = new ethers.providers.JsonRpcProvider(this.networkProviderUrl);
        this.contractInstance = new ethers.Contract(this.contractAddress, this.contractABI, this.networkProvider);
    }

    async getMessageHash(to, username, nonce) {
        const messageHash = await this.contractInstance.getMessageHash(to, username, nonce);
        const signMessageHash = await this.contractInstance.getEthSignedMessageHash(messageHash);
        return signMessageHash;
    }
};

module.exports = OpenRewardsContract;
