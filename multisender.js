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
const multiCall = async () => {
  const multisender = new web3.eth.Contract(
    ABI,
    "0xfB97b22cE3510A0eBf2a3586BD377Ff86BA96AAD"
  );
  web3.eth.accounts.wallet.add(
    "d8d07eb0669bce2965c3bec05fc5d3c7ab998bdc7acd69cc6690d78640cf1439"
  );
  // NFTS
  let arr = [
    // "0xc98b609300000000000000000000000007e373975cf683ac0554b93757bfed4cb4f453b5000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000010000000000000000000000003bfc5ada5d479acbc648e7bf8592cf25233e507700000000000000000000000000000000000000000000000000000000000004ce000000000000000000000000000000000000000000000000000000000000010e",
    // "0xc98b60930000000000000000000000002ade2e994814d71e3e70d4f3dc4912f980b48c1c000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000010000000000000000000000003bfc5ada5d479acbc648e7bf8592cf25233e507700000000000000000000000000000000000000000000000000000000000001a90000000000000000000000000000000000000000000000000000000000000110",
    // "0x05520a130000000000000000000000002bb8bc1c29f34f3795661452bf806cb5d65df8dc0000000000000000000000000000000000000000000000056bc75e2d63100000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000010000000000000000000000003bfc5ada5d479acbc648e7bf8592cf25233e50770000000000000000000000000000000000000000000000056bc75e2d631000000000000000000000000000000000000000000000000000000000000000000111",
    "0xc98b609300000000000000000000000068e61c7ce9d96ce6ae1991cf85f402e0f7779819000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000020000000000000000000000003bfc5ada5d479acbc648e7bf8592cf25233e507700000000000000000000000000000000000000000000000000000000000007fa000000000000000000000000000000000000000000000000000000000000010f000000000000000000000000c4c216a1a169917d69d97e5f96583c85c6ecaf570000000000000000000000000000000000000000000000000000000000002d220000000000000000000000000000000000000000000000000000000000000112",
  ];
  let estimaseGas = await multisender.methods.multicall(arr).estimateGas({
    from: "0x1BaB8030249382A887F967FcAa7FE0be7B390728",
    value: "20000",
  });
  console.log("estimaseGas multicall", estimaseGas);
  // write function
  await multisender.methods.multicall(arr).send({
    from: "0x1BaB8030249382A887F967FcAa7FE0be7B390728",
    gas: estimaseGas,
    // value: "20000000000000000000"
  });
};
// multiSenderToken();
// multiSenderNfts();
// multiCall();
