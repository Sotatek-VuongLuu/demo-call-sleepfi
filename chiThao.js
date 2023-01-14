const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://bsc-dataseed1.ninicoin.io")
);
// abi
const ABI = require("./ABI_THAO.json");

//address
const ADDRESS = "0xdc06e57f3987fedda1567b49791e78b4712e8a28";

// const pkey = ""; // Private Key
// const addressWallet = "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728
// const pkey = ""; // Private Key
const addressWallet = "0x1df7593d6474f963b46172862a82187f928a50ea"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728
const apiWithdrawLatestSToken = async () => {
  const SC = new web3.eth.Contract(ABI, ADDRESS);
  const estimaseGas = await SC.methods
    .apiWithdrawLatestSToken("10200000000000000000")
    .estimateGas({ from: addressWallet });

  console.log(estimaseGas);
  // Gọi hàm write
  web3.eth.accounts.wallet.add(pkey);
  const result = await SC.methods
    .apiWithdrawLatestSToken("10200000000000000000")
    .send({
      from: addressWallet,
      gas: estimaseGas,
    });
  console.log("result: ", result);
};
// apiWithdrawLatestSToken();

const unstakeTokens = async () => {
  const SC = new web3.eth.Contract(ABI, "0x973fEAf394F5E882B0F8a9B5CDC0b3E28AA08926");
  const estimaseGas = await SC.methods
    .unstakeTokens("0xfbcf80ed90856af0d6d9655f746331763efdb22c", 3)
    .estimateGas({ from: addressWallet });

  console.log(estimaseGas);
  // Gọi hàm write
  web3.eth.accounts.wallet.add(pkey);
  const result = await SC.methods.unstakeTokens("0xfbcf80ed90856af0d6d9655f746331763efdb22c", 3).send({
    from: addressWallet,
    gas: estimaseGas,
  });
//   console.log("result: ", result);
};
// unstakeTokens();
