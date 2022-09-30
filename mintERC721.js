const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);
// abi
const ABI_NFT = require("./ABI_NFT.json");

//address
const ADDRESS_BED_NFT = "0xb915076bd31f5bD0d990614E557352DAfb7fAA00";

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
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const mintBigNumberNFT = async (address, to) => {
  let i = 402;
  while (i <= 519) {
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
mintBigNumberNFT(ADDRESS_BED_NFT, "0x1BaB8030249382A887F967FcAa7FE0be7B390728")
