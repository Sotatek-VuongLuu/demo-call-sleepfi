const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);
// abi
const ABI_NFT = require("./ABI_NFT.json");

//address
const ADDRESS_ITEM_NFT = "0xe150B371f3557cE3C04FA2c86F4D23bD696B1058";

const pkey = "ce83b1e1eaceb37bfe563306ac694f004c69072d2a7b591256ee4b0089da932f"; // Private Key
const addressWallet = "0x1E067B77A9d0826021156b706ab218AFb17980C5"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728

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
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const mintBigNumberNFT = async (address, to) => {
  let i = 190;
  while (i <= 1532) {
    try {
      console.log("i: ", i);
      await mintNFT(address, to, 50);
      await sleep(10000);
      i++;
    } catch (error) {
      console.log("error i: ", i);
    }
  }
};
mintBigNumberNFT(ADDRESS_ITEM_NFT, "0x1BaB8030249382A887F967FcAa7FE0be7B390728")
