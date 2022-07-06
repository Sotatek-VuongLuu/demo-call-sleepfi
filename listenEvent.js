const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);

const ABI = require("./ABI.json");
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

getPastEvents();
