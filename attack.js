const axios = require("axios").default;

const CCU = 100;
const METHOD = "post";
const URL = "https://prod2022.sleefi.com/api/v1/market-place/fake-buy-nft";

let report = {
  totalRequest: 0,
  statusCode: {
    "5xx": 0,
    "4xx": 0,
    "3xx": 0,
    "2xx": 0,
    "1xx": 0,
  },
  totalResponseSize: 0,
};

function cb(report) {
  console.clear()
  console.log(report);
}

function handleSuccess(result, cb) {
  report.totalRequest += 1;
  report.totalResponseSize += Number(
    (result.headers["content-length"] / 1024).toFixed(2)
  );

  switch (true) {
    case Number(result.status) < 200: {
      report.statusCode["1xx"] += 1;
      break;
    }
    case Number(result.status) < 300: {
      report.statusCode["2xx"] += 1;
      break;
    }
    case Number(result.status) < 400: {
      report.statusCode["3xx"] += 1;
      break;
    }
    case Number(result.status) < 500: {
      report.statusCode["4xx"] += 1;
      break;
    }
    case Number(result.status) >= 500: {
      report.statusCode["5xx"] += 1;
      break;
    }
  }

  cb && cb(report);
}

function handleFail(err, cb) {
  report.totalRequest += 1;
  report.statusCode["5xx"] += 1;
  cb && cb(report);
}

function getRandomInterger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function attack() {
  try {
    for (let i = 0; i < CCU; i++) {
      axios({
        url: URL,
        method: METHOD, 
        data: {
          nftId: getRandomInterger(2, 10000),
          userId: getRandomInterger(1, 16),
        },
      })
        .then((res) => handleSuccess(res, cb))
        .catch((err) => handleFail(err, cb));
    }
  } catch (err) {
    console.log(err);
  }
}

(() => {
//   attack();
  setInterval(attack, 1000);
})

/**
 * autocannon -c 5000 -d 600 -b '{"nftId": 100,"userId": 6}' -m 'POST' 'https://prod2022.sleefi.com/api/v1/market-place/fake-buy-nft'
Running 600s test @ https://prod2022.sleefi.com/api/v1/market-place/fake-buy-nft
 */