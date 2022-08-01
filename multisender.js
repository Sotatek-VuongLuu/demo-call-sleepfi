const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);

const ABI = require("./ABI_MULTI.json");
const ADDRESS_MULTI = "0xd93AFd29970a0FE587E3468580eeDD7fF15D9be7";
const TOKEN_SLFT = "0x2bB8Bc1C29F34f3795661452Bf806cB5D65DF8DC";
const JEWEL_NFT = "0xa5B24dE54046a751c793Aa034802AdF7017e9712";

const dataToken = [
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 10000000,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 10000000,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 10000000,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 10000000,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 10000000,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 10000000,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 10000000,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 10000000,
    walletId: 1,
  },
  {
    reiciver: "0x1BaB8030249382A887F967FcAa7FE0be7B390728",
    value: 10000000,
    walletId: 1,
  },
  {
    reiciver: "0x1BaB8030249382A887F967FcAa7FE0be7B390728",
    value: 10000000,
    walletId: 1,
  },
];
const dataNfts = [
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 1,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 2,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 3,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 4,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 5,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 6,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 7,
    walletId: 1,
  },
  {
    reiciver: "0x400eE0C820144c8Bb559AcE1ad75e5C13e750334",
    value: 8,
    walletId: 1,
  },
  {
    reiciver: "0x1BaB8030249382A887F967FcAa7FE0be7B390728",
    value: 9,
    walletId: 1,
  },
  {
    reiciver: "0x1BaB8030249382A887F967FcAa7FE0be7B390728",
    value: 10,
    walletId: 1,
  },
];
const multiSenderToken = async () => {
  const multisender = new web3.eth.Contract(ABI, ADDRESS_MULTI);
  web3.eth.accounts.wallet.add(
    "d8d07eb0669bce2965c3bec05fc5d3c7ab998bdc7acd69cc6690d78640cf1439"
  );
  // TOKEN
  let estimaseGas = await multisender.methods
    .multiSenderToken(TOKEN_SLFT, 100000000, dataToken)
    .estimateGas({ from: "0x1BaB8030249382A887F967FcAa7FE0be7B390728" });
  console.log("estimaseGas mutilsendToken", estimaseGas);
  // write function
  await multisender.methods
    .multiSenderToken(TOKEN_SLFT, 100000000, dataToken)
    .send({
      from: "0x1BaB8030249382A887F967FcAa7FE0be7B390728",
      gas: estimaseGas,
    });
};
const multiSenderNfts = async () => {
  const multisender = new web3.eth.Contract(ABI, ADDRESS_MULTI);
  web3.eth.accounts.wallet.add(
    "d8d07eb0669bce2965c3bec05fc5d3c7ab998bdc7acd69cc6690d78640cf1439"
  );
  // NFTS
  let estimaseGas = await multisender.methods
    .multiSenderNFTs(JEWEL_NFT, dataNfts)
    .estimateGas({ from: "0x1BaB8030249382A887F967FcAa7FE0be7B390728" });
  console.log("estimaseGas mutilsendNfts", estimaseGas);
  // write function
  await multisender.methods.multiSenderNFTs(JEWEL_NFT, dataNfts).send({
    from: "0x1BaB8030249382A887F967FcAa7FE0be7B390728",
    gas: estimaseGas,
  });
};
multiSenderToken();
multiSenderNfts();
