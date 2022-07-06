const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);
// abi
const ABI_NFT = require("./ABI_NFT.json");

//address
const ADDRESS_NFT = "0x29285b806CF63b5C595BAf6FfAb27b6b70d2E01F";

const NFT = new web3.eth.Contract(ABI_NFT, ADDRESS_NFT);
const pkey = "d8d07eb0669bce2965c3bec05fc5d3c7ab998bdc7acd69cc6690d78640cf1439"; // Private Key
const addressWallet = "0x1BaB8030249382A887F967FcAa7FE0be7B390728"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728

const mintNFT = async (to) => {
  web3.eth.accounts.wallet.add(pkey);
  let uri = ""; // link IPFS theo chuan form ipfs://QmUijvc1z7AHDQxTspWLiEHuzNW5ZW7bqFq3aMhqwBNpCu
  const estimaseGas = await NFT.methods
    .mintTo(to, uri)
    .estimateGas({ from: addressWallet });
  // console.log(estimaseGas);
  // Gọi hàm write
  const resultTransaction = await NFT.methods.mintTo(to, uri).send({
    from: addressWallet,
    gas: estimaseGas,
  });
};
mintNFT("0x34e68f0dAeac3D46CF48a7309cFa3F22e833e1f5");

const readIPFS = async () => {
  // ket arr = [""]
  for (let i = 1; i <= 2; i++) {
    await NFT.methods
      .tokenURI(i)
      .call()
      .then(function(result) {
        console.log("tokenURI ", i, ": ", result);
      });
  }
};
// readIPFS();
