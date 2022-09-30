const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax.network/ext/bc/C/rpc")
);
// abi
const ABI_NFT = require("./ABI_NFT_PRO.json");

//address
const ADDRESS_BED_NFT = "0x06c8B190537aAA76926dfe50eaF4B86326BB0DFA";

const pkey = ""; // Private Key
const addressWallet = ""; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728

const setTimeLineJS = async (start, end) => {
  const NFT = new web3.eth.Contract(ABI_NFT, ADDRESS_BED_NFT);
  const estimaseGas = await NFT.methods
    .setTimeLine(start, end)
    .estimateGas({ from: addressWallet });

  console.log(estimaseGas);
  // Gọi hàm write
  web3.eth.accounts.wallet.add(pkey);
  await NFT.methods.setTimeLine(start, end).send({
    from: addressWallet,
    gas: estimaseGas,
  });
};
setTimeLineJS(1661247000,1666517400)


