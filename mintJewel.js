const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);
// abi
const ABI_NFT = require("./ABI_NFT.json");

//address
const ADDRESS_JEWEL_NFT = "0x66ed6234e0f5984B0b0316679262FbAbC19a5cdD";

const pkey = "e8f17008a973e20c69aa891778c5b551777e5b8655eca293b6411789ad681f68"; // Private Key
const addressWallet = "0xFBf8f33c0f3415B35dB594DDfe5932475485Fbad"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728

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
  let i = 145;
  while (i <= 277) {
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
mintBigNumberNFT(ADDRESS_JEWEL_NFT, "0x1BaB8030249382A887F967FcAa7FE0be7B390728")
