const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
);
// abi
const ABI_ROUTER = require("./ABI_ROUTER.json");
const ABI_FACTORY = require("./ABI_FACTORY.json");

//address
const ADDRESS_ROUTER = "0xd7f655E3376cE2D7A2b08fF01Eb3B1023191A901";
const ADDRESS_FACTORY = "0xf5c7d9733e5f53abcc1695820c4818c59b457c2c";

const router = new web3.eth.Contract(ABI_ROUTER, ADDRESS_ROUTER);
const factory = new web3.eth.Contract(ABI_FACTORY, ADDRESS_FACTORY);
const pkey = "d8d07eb0669bce2965c3bec05fc5d3c7ab998bdc7acd69cc6690d78640cf1439"; // Private Key
const addressWallet = "0x1BaB8030249382A887F967FcAa7FE0be7B390728"; // Public key 0x1BaB8030249382A887F967FcAa7FE0be7B390728

const swapAVAXToToken = async () => {
  web3.eth.accounts.wallet.add(pkey);
  const estimaseGas = await router.methods
    .swapExactAVAXForTokens(to, uri)
    .estimateGas({
      from: addressWallet,
      value: web3.utils.toWei(amount, "ether"),
    });
  // console.log(estimaseGas);
  // Gọi hàm write
  //   const resultTransaction = await router.methods.mintTo(to, uri).send({
  //     from: addressWallet,
  //     gas: estimaseGas,
  //   });
};

const getAmountsIn = async () => {
  // ket arr = [""]
  for (let i = 1; i <= 2; i++) {
    await router.methods
      .tokenURI(i)
      .call()
      .then(function(result) {
        console.log("tokenURI ", i, ": ", result);
      });
  }
};
const factoryPair = async () => {
  const length = await factory.methods.allPairsLength().call();
  console.log(length);
  for (let i = 0; i < length; i++) {
    await factory.methods
      .allPairs(i)
      .call()
      .then((result) => console.log(result));
  }
};
factoryPair();
const allPairs = [
  "0x34B5A02E5f1534fE3F0bcab9Bd673FBD6946eCD5",
  "0x6eBE57Aa70c7b8cB54d01C365Fd6dfe777f7667f",
  "0xb18Aa9d339351e41c79B91cD463e30226Bfdb6d9",
  "0x0c01ABf914B0C4554D9dA66167293B10C312Fe57",
  "0xB6f0758f374b3c570E8073Ec8f552C9B2DB939F3",
  "0x6173fcdD4e6727bBF9e189fA99393f28547a42aD",
  "0x6Ed081838c9025118e5726dE9f1052dDA487a050",
  "0xd520cF33C013909AFc9Cf158D73F5460753B5ec4",
  "0x0982C2b2433168f1B9F8C7DFe297139E970a89ae",
  "0xe856bDDc6dDB18Ce456761ed693085F558334c45",
  "0x7101Fb91fB1e0C23F51Eb8E9b9e39E1c77f367D7",
  "0xec3eC5c6B11bA674449D9D080BcE36DD783DC9Ae",
  "0x5514c6e297D4638A0185108Af8FB8b1F04d572BC",
  "0xcD864A399e3C088A6cd1fa2b620146e39F7229df",
  "0x9223450FF010EFE0e56b526e5ac36445A3e7C1a6",
  "0x67B2640e624e2Ba684F3dB925c8A81A958fe225a",
  "0x7dA511C7E49B2E7356Fb146cc63B7898274ECCc0",
  "0x9aff1242b3C0Aa6Ed0cCB3E6c18abB60C31d4D01",
  "0xC7FAC701149A830E2875926f5a348004AAC694db",
  "0xd985bae18850874B2b22eF9D7fd7534AE915360c",
  "0x04E41AAab84E86E940956a9949a2E6E04C412405",
  "0x0289099f8B484E6aA7c19D5699819d6F55b3503f",
  "0x40e6EDF29f303B6112d7b7124a6d838130a40844",
  "0x727f1088c60c88cD728cf59Ee84163d223fF88e4",
  "0x694196b70bBfB060EEF153bcF3D2ba326FAB2a9d",
  "0xE7CDcd29Ff44b731b0a9ad06E3Fe1aE5655eE40c",
  "0x4D9a07c1882f4c8D9C32fF2b13f11756B09cf8F0",
  "0x5A9A4bd10fA246755B4fBAa46D17378E630C8456",
  "0x1F39646507324781eF9642c9b24B9FA9170B89aC",
  "0xE3AF8c50895b779845C05583580B1e8030A22BEd",
  "0x1820b190a8f6Dd559C850776308423733f2FBc65",
  "0x3e0E94545edAe3F304050EB73b674cBEEfa5a99f",
  "0x4B2f8A7b34D16bD75496aD9030B2050E66921C50",
  "0x4225EF8f4386557469c8907397639B575Bdb86e9",
  "0x0f3A828f987B491650f355AF8f11dDE2134b505C",
  "0xE9b4989DFEf14297a1D3e4BA87fa95a1C873d9aA",
  "0x313dBA7DdA84c984623Fb244631493fD7BfAe5D7",
  "0x7A303e7D753b639FE450da8B05161aD3BE45Ea3D",
  "0x1FC628F33a00bBF8D31594e5F5d5e919832e3FC0",
  "0x374C82a519268826797Bec67Befbf2D663E3bb76",
  "0xF71561b9C6D0e292b06E3D9D173ECe48Db5E02Bd",
  "0xb7829401854A550eef15D932CcD221A5e89a89eb",
  "0x66b2638CeeF910354C91CC706DAD357769C48D38",
  "0x41DD658320A109dE7D8C4e7eeDD4d3855D28d7F2",
  "0x2e245620D6243190Cf85DDB41688319780BA5f78",
  "0xEc256688489c8aba3389a62e5d9139b2039A4B0d",
  "0xf4C0229Fe3E8F5FE587dAa705C98B8FE80bC6022",
  "0x261854dA89fE30c057FaE49f9017915d6D9148Ff",
  "0x58b0390Ff8ff3A743EcAece76bCfd58082D8EC87",
  "0x6984C611124Fd461A22cFBEb01214680c0993fE5",
  "0x4eDdbC2F64601698224d0bbD81379a3B4F7582Ff",
  "0x0E80D299B88b5Eb3F0B5C5147C3A640782191B35",
  "0xE6414BB8F697D3162dF56AeCcaA96A65Fa937356",
  "0x9E5D712181a7cA38034f0FEeA37754d1e955859D",
  "0xcFA598F40aA206E57217512B7817e2F408275c73",
  "0x01C63B9551C1B90399a1Ae17d37263967F8dAC20",
  "0x3233AF53a0CEA4168528d297515ED8f25ED3FDa9",
  "0xffFe600c27dD37333a82915AC3265529A7b92eE3",
  "0xAa5109D42b62fF8ee9ae2031994D7e0412FC976b",
  "0x1F9c5e987CF555D7F0c05a0f868b27d1ee53Ed99",
  "0x9Fc100A32568eA21d507f78c9B707c20A4a5a219",
  "0xD675C762d79b25dB203CC6e4Fa7869f59cE29022",
  "0xC751CB5B02347BC1710e8218beE084ECE50E5417",
  "0x264102f5B37F19CfC4855E4079ee04e4ddcc447E",
  "0x16EC74b6A275d69503D818f822fBdaB6e346f431",
  "0x185FF78200F9dC0e87d0B257179023150D5432A9",
  "0x6329E7c53445256418083E7ff9eE6e8f918a62eC",
  "0x67240e048D93615C996e7F2626774370787196f2",
  "0x6DF6C3E185D38A76255748193D36858831Cf8931",
];
