const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);

const ABI = require("./ABI.json");
const ABI_MULTI = require("./ABI_MULTI.json");
const ADDRESS_MULTI = "0x8526be67D8A1CEd1730CA78a64eA6fCA41BcDcc7";
const ADDRESS = "0x7AEC68f23e813a9E7c3d1B9B3fe16c48AF1124ef";
const CONTRACT = new web3.eth.Contract(ABI, ADDRESS);

const getPastEvents = async () => {
  let options = {
    fromBlock: 11135258,
    toBlock: 11135426,
  };
  const event = await CONTRACT.getPastEvents("allEvents", options);
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => console.log(err));
  console.log(event);
};

// getPastEvents();

const getPastEventsMulti = async () => {
  const multi = new web3.eth.Contract(ABI_MULTI, ADDRESS_MULTI);
  let options = {
    fromBlock: 12030053, //12029074
    toBlock: 12030053,
  };
  const event = await multi.getPastEvents("allEvents", options);
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => console.log(err));
  console.log(event);
};
// getPastEventsMulti()

const addressAdmin = "0x1BaB8030249382A887F967FcAa7FE0be7B390728";
const pk = "d8d07eb0669bce2965c3bec05fc5d3c7ab998bdc7acd69cc6690d78640cf1439";
const call = async () => {
  const multi = new web3.eth.Contract(ABI_MULTI, "0xfB97b22cE3510A0eBf2a3586BD377Ff86BA96AAD");
  const arrEncode = [
    '0x05520a13000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000470de4df82000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000001000000000000000000000000400ee0c820144c8bb559ace1ad75e5c13e75033400000000000000000000000000000000000000000000000000470de4df8200000000000000000000000000000000000000000000000000000000000000000033',
    '0xc98b6093000000000000000000000000721c56ae53a9fb6cb783505f9994d023009a500800000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000002000000000000000000000000400ee0c820144c8bb559ace1ad75e5c13e75033400000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000035000000000000000000000000400ee0c820144c8bb559ace1ad75e5c13e75033400000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000037',
    '0x05520a130000000000000000000000003afb22cdf460f2299d8b6b4443e1c846882646d90000000000000000000000000000000000000000000000003782dace9d90000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000001000000000000000000000000400ee0c820144c8bb559ace1ad75e5c13e7503340000000000000000000000000000000000000000000000003782dace9d9000000000000000000000000000000000000000000000000000000000000000000034',
    '0xc98b6093000000000000000000000000b7631e0723f6d243603afb206f85af8bbc6c485400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000002000000000000000000000000400ee0c820144c8bb559ace1ad75e5c13e75033400000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000036000000000000000000000000400ee0c820144c8bb559ace1ad75e5c13e75033400000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000038'
]
  // const estimateGas = await multi.methods.multicall(arrEncode).estimateGas({
  //   from: addressAdmin,
  //   value: "20000000000000000"
  // });
  // console.log("estimateGas: ", estimateGas);
  web3.eth.accounts.wallet.add(pk);
  const ressult = await multi.methods.multicall(arrEncode).send({
    from: addressAdmin,
    gas: 8000000,
    value: "20000000000000000"
  });
  // const eventsToken = ressult.events.LogMultiSendToken || [];
  // const eventsNft = ressult.events.LogMultiSendNfts || [];
  // console.log("events Transaction: ", eventsToken);
  // console.log("events Transaction: ", eventsNft);
  // for (const event in eventsToken) {
  //   await handleEvent(eventsToken[event]);
  // }
  // for (const event in eventsNft) {
  //   await handleEvent(eventsNft[event]);
  // }
};

const handleEvent = async (event) => {
  console.log("events: ", event);
  console.log("event['event']: ", event['event']);
}
call()

const callNFTs = async () => {
  const multi = new web3.eth.Contract(ABI_MULTI, ADDRESS_MULTI);
const estimateGas = await multi.methods.multicall(arrEncode).estimateGas({
    from: addressAdmin,
    value: "20000000000000000"
  });
  console.log("estimateGas: ", estimateGas);
  web3.eth.accounts.wallet.add(pk);
  const ressult = await multi.methods.multicall(arrEncode).send({
    from: addressAdmin,
    gas: 8000000,
    value: "20000000000000000"
  });
}
