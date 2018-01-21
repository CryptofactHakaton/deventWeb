import * as Web3 from 'web3';

class Wallet {

    private web3;

    constructor() {
        this.web3 = new Web3(web3.currentProvider);
    }

    getAddr() {
        if (this.web3.eth.accounts && this.web3.eth.accounts.length > 0) {
            return this.web3.eth.accounts[0];
        }
    }
    
    sendTransaction(data, cb) {
        this.web3.eth.sendTransaction({
            ...data,
            from: this.getAddr()
        }, function(err, transactionHash) {
            if (!err)
            cb(transactionHash);
        });
    }
}

export const wallet = new Wallet();