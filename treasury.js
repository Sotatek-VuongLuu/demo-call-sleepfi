const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);
// abi
const ABI_TREASURY = require("./ABI_TREASURY.json");

//address
const ADDRESS_TREASURY = "0x7AEC68f23e813a9E7c3d1B9B3fe16c48AF1124ef";

const treasury = new web3.eth.Contract(ABI_TREASURY, ADDRESS_TREASURY);
const pkey = "d8d07eb0669bce2965c3bec05fc5d3c7ab998bdc7acd69cc6690d78640cf1439"; // Private Key
const addressWallet = "0x1BaB8030249382A887F967FcAa7FE0be7B390728"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728

const depositToken = async () =>{

}
const sign = async () => {
    
}