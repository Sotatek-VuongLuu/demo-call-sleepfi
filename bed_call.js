const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);
// abi
const ABI_NFT_BED = require("./ABI_NFT_BED.json");

//address
const ADDRESS_BED_NFT = "0xe204276640D5Ce5D5fcAD7D19659D979373FbdC0";

const pkey = "d8d07eb0669bce2965c3bec05fc5d3c7ab998bdc7acd69cc6690d78640cf1439"; // Private Key
const addressWallet = "0x1BaB8030249382A887F967FcAa7FE0be7B390728"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728

const add1 = "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334";

const mintNFT = async (address, to, number) => {
  const NFT = new web3.eth.Contract(ABI_NFT_BED, address);
  web3.eth.accounts.wallet.add(pkey);
  const estimaseGas = await NFT.methods
    .batchMint(to, number)
    .estimateGas({ from: addressWallet });
  console.log(estimaseGas);
  // Gọi hàm write
    await NFT.methods.batchMint(to, number).send({
      from: addressWallet,
      gas: estimaseGas,
    });
};

// mintNFT(ADDRESS_BED_NFT, addressWallet, 1);

const saleWhitelist = async (address, to) => {
  const NFT = new web3.eth.Contract(ABI_NFT_BED, address);
  web3.eth.accounts.wallet.add(pkey);
  const estimaseGas = await NFT.methods
    .saleWhitelist(to)
    .estimateGas({ from: addressWallet });
  console.log(estimaseGas);
  // Gọi hàm write
//   await NFT.methods.saleWhitelist(to).send({
//     from: addressWallet,
//     gas: estimaseGas,
//   });
};

// saleWhitelist(ADDRESS_BED_NFT, addressWallet);

const addWS = async () => {
    const NFT = new web3.eth.Contract(ABI_NFT_BED, address);
    web3.eth.accounts.wallet.add(pkey);
    const estimaseGas = await NFT.methods
      .addWhitelist(addressWS)
      .estimateGas({ from: addressWallet });
    console.log(estimaseGas);
    // Gọi hàm write
    await NFT.methods.addWhitelist(addressWS).send({
      from: addressWallet,
      gas: estimaseGas,
    });
  };
addWS();
const addressWS = [
    "0x1BaB8030249382A887F967FcAa7FE0be7B390728",
    "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    "0x1BaB8030249382A887F967FcAa7FE0be7B390728"
]