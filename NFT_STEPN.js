const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);
// abi
const ABI_NFT = require("./ABI_NFT.json");
const ABI_MULTI = require("./ABI_MULTI.json");
const ABI_ERC20 = require("./ABI_ERC20.json");

//address
const ADDRESS_BED_NFT = "0x07E373975Cf683ac0554B93757bFEd4Cb4F453B5";
const ADDRESS_BEDBOX_NFT = "0x43B951FcD671A67149Bd8B2f9da9DE9afacd1D78";
const ADDRESS_JEWEL_NFT = "0x68e61C7ce9D96ce6aE1991CF85f402e0F7779819";
const ADDRESS_ITEM_NFT = "0x2AdE2e994814d71E3E70D4f3dc4912f980b48C1C";

const ADDRESS_MULTI = "0xfB97b22cE3510A0eBf2a3586BD377Ff86BA96AAD";

// const pkey = "440331baae95b9bd06329558f61c05cf28f64b50c76e3ba5ae6c0f6179b1db52"; // Private Key
// const addressWallet = "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728
const pkey = "014090d8e26b77978c049a37624a919cf68bc68a4c458a02e2fcebd883372336"; // Private Key
const addressWallet = "0xF63eb8F628aF8901b3DDCCc00A69beE916f89536"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728
const mintNFT = async (address, to, number) => {
  const NFT = new web3.eth.Contract(ABI_NFT, address);
  const estimaseGas = await NFT.methods
    .batchMint(to, number)
    .estimateGas({ from: addressWallet });

  console.log(estimaseGas);
  // Gọi hàm write
  web3.eth.accounts.wallet.add(pkey);
  await NFT.methods.batchMint(to, number).send({
    from: addressWallet,
    gas: estimaseGas,
  });
};

const approveAllNFT = async (address, pk, spender) => {
  const NFT = new web3.eth.Contract(ABI_NFT, "0xA8c372de1001a1675aba80cD83B0DebA24f8f744");
  const estimaseGas = await NFT.methods
    .setApprovalForAll(spender, true)
    .estimateGas({ from: address });

  console.log(estimaseGas);
  // Gọi hàm write
  web3.eth.accounts.wallet.add(pk);
  await NFT.methods.setApprovalForAll(spender, true).send({
    from: address,
    gas: estimaseGas,
  });
};

const setBaseURI = async (address, uri) => {
  const NFT = new web3.eth.Contract(ABI_NFT, address);
  const estimaseGas = await NFT.methods
    .setBaseURI(uri)
    .estimateGas({ from: addressWallet });

  console.log(estimaseGas);
  // Gọi hàm write
  web3.eth.accounts.wallet.add(pkey);
  await NFT.methods.setBaseURI(uri).send({
    from: addressWallet,
    gas: estimaseGas,
  });
};
// setBaseURI(ADDRESS_BEDBOX_NFT, "https://alpha2022.sleefi.com/nft/bedbox/")

const addressTester = "";
// const number;

const mintV2 = async (address, number) => {
  mintNFT(
    address,
    "0x1E067B77A9d0826021156b706ab218AFb17980C5",
    number
  ); // ví 1
  await sleep(10000);
  mintNFT(
    address,
    "0xFBf8f33c0f3415B35dB594DDfe5932475485Fbad",
    number
  ); // ví 2
  await sleep(10000);
  mintNFT(
    address,
    "0x4D473588c327EEa8BC6E98c3f28D916cB81e2585",
    number
  ); // ví 3
  await sleep(10000);
  mintNFT(
    address,
    "0xDd660397a44a555846c19565F911Db1187E9DF2C",
    number
  ); // ví 4
};
const approveAllV2 = async (spender) => {
  approveAllNFT(
    "0x1E067B77A9d0826021156b706ab218AFb17980C5",
    "ce83b1e1eaceb37bfe563306ac694f004c69072d2a7b591256ee4b0089da932f",
    spender
  ); // ví 1
  await sleep(10000);
  approveAllNFT(
    "0xFBf8f33c0f3415B35dB594DDfe5932475485Fbad",
    "e8f17008a973e20c69aa891778c5b551777e5b8655eca293b6411789ad681f68",
    spender
  ); // ví 2
  await sleep(10000);
  approveAllNFT(
    "0x4D473588c327EEa8BC6E98c3f28D916cB81e2585",
    "c4853c43ea8f301cabffe33ecb3ff75a18c9f1c5044d9f6987798f6406b74a8e",
    spender
  ); // ví 3
  await sleep(10000);
  approveAllNFT(
    "0xDd660397a44a555846c19565F911Db1187E9DF2C",
    "c4e9d213a7903495503565e9fb6d9152ed625a526f5a4d8dd1624e0ef82fe692",
    spender
  ); // ví 4
};
// mintV2("0xA8c372de1001a1675aba80cD83B0DebA24f8f744", 50);
// approveAllV2("0xB97D18bcBC7b51a56Bae3181c753eAa5052fdAAB");

const transferNFT = async (address, to, tokenId) => {
  const NFT = new web3.eth.Contract(ABI_NFT, address);
  const estimaseGas = await NFT.methods
    .transferFrom(addressWallet, to, tokenId)
    .estimateGas({ from: addressWallet });
  console.log("estimateGas: ", estimaseGas);
  web3.eth.accounts.wallet.add(pkey);
  // const result = await NFT.methods
  //   .transferFrom(addressWallet, to, tokenId)
  //   .send({ from: addressWallet, gas: estimaseGas });
  // console.log("result: ", result);
  // txHash(result.transactionHash)
};

const transferToken = async (address, to, amount) => {
  const token = new web3.eth.Contract(ABI_ERC20, address);
  const estimaseGas = await token.methods
    .transfer(to, amount)
    .estimateGas({ from: addressWallet });
  console.log("estimateGas: ", estimaseGas);
  web3.eth.accounts.wallet.add(pkey);
  const res = await token.methods
    .transfer(to, amount)
    .send({ from: addressWallet, gas: estimaseGas });
  console.log("res: ", res);
};
const transferNativeToken = async (to) => {
  web3.eth.accounts.wallet.add(pkey);
  const res = await web3.eth.sendTransaction({
    from: addressWallet,
    // gasPrice: "20000000000",
    gas: "21000",
    to: to,
    value: "100000000000000000",
    data: ""
  });
  console.log("res: ", res);
};
// transferNativeToken("0x400eE0C820144c8Bb559AcE1ad75e5C13e750334")
// transferToken("0x3AFb22cdF460F2299D8b6b4443e1c846882646D9","0x400eE0C820144c8Bb559AcE1ad75e5C13e750334", "1000000000000000000");
// transferNFT("0xe7FbCB18BE9D93a83407f6BE7fD3E6FF901f2758", "0x379E6E9D9C9BaDBF519A8A9A457987B601C8dE64", 15);

// transferNFT("0xa5b24de54046a751c793aa034802adf7017e9712", "0x379E6E9D9C9BaDBF519A8A9A457987B601C8dE64", 20);

// transferNFT("0x68e61C7ce9D96ce6aE1991CF85f402e0F7779819", "0x6dfa6345eebe5bff41ef1180981615c613695fa4", 7000);
// transferNFT("0x04a4339CD0BBB87869E7eAdDAc758586be079b9E", "0x6dfa6345eebe5bff41ef1180981615c613695fa4", 1);
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const sendChiVui = async (contract, to) => {
  await transferNFT(contract, to, 2);
  await sleep(10000);
  await transferNFT(contract, to, 3);
  await sleep(10000);
  await transferNFT(contract, to, 104);
  await sleep(10000);
  await transferNFT(contract, to, 8780);
  await sleep(10000);
  await transferNFT(contract, to, 9769);
  await sleep(10000);
  await transferNFT(contract, to, 10204);
};
// sendChiVui("0xAd94cdceBA5cE30F04e1842d37edF950c031E405","0x1BaB8030249382A887F967FcAa7FE0be7B390728");

const b = ["3", "2", "1", "14", "15"];
const bD = async () => {
  for (const x of b) {
    console.log("x: ", x);
    console.log("b[x]: ", b[x]);
  }
};
// bD()

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
    console.log("transaction.status: ", transaction.status);
    getPastEventsMulti(transaction.blockNumber);
  });
};
const getPastEventsMulti = async (blockNumber) => {
  const multi = new web3.eth.Contract(ABI_MULTI, ADDRESS_MULTI);
  let options = {
    fromBlock: blockNumber,
    toBlock: blockNumber,
  };
  const event = await multi
    .getPastEvents("allEvents", options)
    .then((res) => {
      console.log("allEvents response: ", res);
    })
    .catch((err) => console.log(err));
};
// txHash("0xde0d1a715ebbf251efa94fcef8ba574bd87d6c9c3d1e85dd83d46fc2f457b5f0")


const getTotalSupply = async () => {
  console.log("comin");
  const arrNFT = [
    "0xb915076bd31f5bd0d990614e557352dafb7faa00",
    "0x1da565a60c29f128706aa58d59d20e3d1f7d414e",
    "0x66ed6234e0f5984b0b0316679262fbabc19a5cdd",
    "0xe150b371f3557ce3c04fa2c86f4d23bd696b1058"
  ]
  for (const nft of arrNFT) {
    const NFT = new web3.eth.Contract(ABI_NFT, nft);
    const totalSypply = await NFT.methods
      .totalSupply().call();
    console.log(nft, ": ", totalSypply);
  }
  // const gasPrice = await web3.eth.getGasPrice()
  // console.log('gasPrice: ', gasPrice);
}
getTotalSupply()