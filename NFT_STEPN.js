const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);
// abi
const ABI_NFT = require("./ABI_NFT.json");
const ABI_MULTI = require("./ABI_MULTI.json");

//address
const ADDRESS_BED_NFT = "0x721C56ae53a9fB6CB783505f9994d023009a5008";
const ADDRESS_BEDBOX_NFT = "0x0CF58517D57Cc0479a7aDfdC7f5094624Bc2FcB9";
const ADDRESS_JEWEL_NFT = "0xB7631E0723F6D243603afB206F85af8bBC6c4854";
const ADDRESS_ITEM_NFT = "0x3C3D1C2e1a817d21C26aA99E146a6795b4748aD3";

const ADDRESS_MULTI = "0xfB97b22cE3510A0eBf2a3586BD377Ff86BA96AAD";


const pkey = "440331baae95b9bd06329558f61c05cf28f64b50c76e3ba5ae6c0f6179b1db52"; // Private Key
const addressWallet = "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728

const mintNFT = async (address, to, number) => {
  const NFT = new web3.eth.Contract(ABI_NFT, address);
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
const addressTester = "";
// const number;
// mintNFT(ADDRESS_BED_NFT, addressWallet, 10);
// mintNFT(ADDRESS_JEWEL_NFT, addressWallet, 10);
// mintNFT(ADDRESS_ITEM_NFT, addressTester, number);

const transferNFT = async (address, to, tokenId) => {
  const NFT = new web3.eth.Contract(ABI_NFT, address);
  const estimaseGas = await NFT.methods
    .transferFrom(addressWallet, to, tokenId)
    .estimateGas({ from: addressWallet });
  console.log("estimateGas: ", estimaseGas);
  web3.eth.accounts.wallet.add(pkey);
  const result = await NFT.methods
    .transferFrom(addressWallet, to, tokenId)
    .send({ from: addressWallet, gas: estimaseGas });
    // console.log("result: ", result);
};
// transferNFT(ADDRESS_BED_NFT, "0x1bab8030249382a887f967fcaa7fe0be7b390728", 5);
// transferNFT(ADDRESS_BED_NFT, "0x1bab8030249382a887f967fcaa7fe0be7b390728", 6);
// transferNFT(ADDRESS_BED_NFT, "0x1bab8030249382a887f967fcaa7fe0be7b390728", 7);
// transferNFT(ADDRESS_BED_NFT, "0x1bab8030249382a887f967fcaa7fe0be7b390728", 8);
// transferNFT(ADDRESS_JEWEL_NFT, "0x1bab8030249382a887f967fcaa7fe0be7b390728", 5);
// transferNFT(ADDRESS_JEWEL_NFT, "0x1bab8030249382a887f967fcaa7fe0be7b390728", 6);
// transferNFT(ADDRESS_JEWEL_NFT, "0x1bab8030249382a887f967fcaa7fe0be7b390728", 7);
// transferNFT(ADDRESS_JEWEL_NFT, "0x1bab8030249382a887f967fcaa7fe0be7b390728", 8);


const txHash = async (txHash) => {
  await web3.eth.getTransactionReceipt(txHash).then(async (transaction) => {
    // console.log(transaction);
    console.log("transaction.status: ",transaction.status);
    getPastEventsMulti(transaction.blockNumber)
    
  });
};
const getPastEventsMulti = async (blockNumber) => {
  const multi = new web3.eth.Contract(ABI_MULTI, ADDRESS_MULTI);
  let options = {
    fromBlock: blockNumber,
    toBlock: blockNumber,
  };
  const event = await multi.getPastEvents("allEvents", options)
  .then((res) => {
    console.log("getPastEventsMulti response: ", res);
  })
  .catch((err) => console.log(err));
};
// txHash("0xde0d1a715ebbf251efa94fcef8ba574bd87d6c9c3d1e85dd83d46fc2f457b5f0")
