const fs = require("fs");
const BED_COMMON_QUALITY_PERCENT = [
  { value: 1, percent: 6 },
  { value: 2, percent: 6 },
  { value: 3, percent: 9 },
  { value: 4, percent: 9 },
  { value: 5, percent: 8 },
  { value: 6, percent: 7 },
  { value: 7, percent: 15 },
  { value: 8, percent: 6 },
  { value: 9, percent: 5 },
  { value: 10, percent: 5 },
  { value: 11, percent: 4 },
  { value: 12, percent: 4 },
  { value: 13, percent: 4 },
  { value: 14, percent: 3 },
  { value: 15, percent: 2 },
  { value: 16, percent: 2 },
  { value: 17, percent: 2 },
  { value: 18, percent: 1 },
  { value: 19, percent: 1 },
  { value: 20, percent: 1 },
];

const BED_UNCOMMON_QUALITY_PERCENT = [
  { value: 10, percent: 10 },
  { value: 11, percent: 17 },
  { value: 12, percent: 15 },
  { value: 13, percent: 22 },
  { value: 14, percent: 10 },
  { value: 15, percent: 9 },
  { value: 16, percent: 7 },
  { value: 17, percent: 5 },
  { value: 18, percent: 1 },
  { value: 19, percent: 0.8 },
  { value: 20, percent: 0.5 },
  { value: 21, percent: 0.4 },
  { value: 22, percent: 0.4 },
  { value: 23, percent: 0.3 },
  { value: 24, percent: 0.3 },
  { value: 25, percent: 0.3 },
  { value: 26, percent: 0.3 },
  { value: 27, percent: 0.2 },
  { value: 28, percent: 0.2 },
  { value: 29, percent: 0.2 },
  { value: 30, percent: 0.1 },
];

const BED_RARE_QUALITY_PERCENT = [
  { value: 20, percent: 4 },
  { value: 21, percent: 4 },
  { value: 22, percent: 4 },
  { value: 23, percent: 4 },
  { value: 24, percent: 4 },
  { value: 25, percent: 4 },
  { value: 26, percent: 4 },
  { value: 27, percent: 3 },
  { value: 28, percent: 3 },
  { value: 29, percent: 3 },
  { value: 30, percent: 3 },
  { value: 31, percent: 3 },
  { value: 32, percent: 3 },
  { value: 33, percent: 3 },
  { value: 34, percent: 3 },
  { value: 35, percent: 3 },
  { value: 36, percent: 3 },
  { value: 37, percent: 3 },
  { value: 38, percent: 3 },
  { value: 39, percent: 3 },
  { value: 40, percent: 3 },
  { value: 41, percent: 3 },
  { value: 42, percent: 3 },
  { value: 43, percent: 3 },
  { value: 44, percent: 3 },
  { value: 45, percent: 3 },
  { value: 46, percent: 3 },
  { value: 47, percent: 3 },
  { value: 48, percent: 3 },
  { value: 49, percent: 3 },
  { value: 50, percent: 3 },
];

const BED_EPIC_QUALITY_PERCENT = [
  { value: 25, percent: 1.4 },
  { value: 26, percent: 1.4 },
  { value: 27, percent: 1.4 },
  { value: 28, percent: 1.4 },
  { value: 29, percent: 1.4 },
  { value: 30, percent: 1.4 },
  { value: 31, percent: 1.4 },
  { value: 32, percent: 1.4 },
  { value: 33, percent: 1.4 },
  { value: 34, percent: 1.4 },
  { value: 35, percent: 1.4 },
  { value: 36, percent: 1.4 },
  { value: 37, percent: 1.3 },
  { value: 38, percent: 1.3 },
  { value: 39, percent: 1.3 },
  { value: 40, percent: 1.3 },
  { value: 41, percent: 1.3 },
  { value: 42, percent: 1.3 },
  { value: 43, percent: 1.3 },
  { value: 44, percent: 1.3 },
  { value: 45, percent: 1.3 },
  { value: 46, percent: 1.3 },
  { value: 47, percent: 1.3 },
  { value: 48, percent: 1.3 },
  { value: 49, percent: 1.3 },
  { value: 50, percent: 1.3 },
  { value: 51, percent: 1.3 },
  { value: 52, percent: 1.3 },
  { value: 53, percent: 1.3 },
  { value: 54, percent: 1.3 },
  { value: 55, percent: 1.3 },
  { value: 56, percent: 1.3 },
  { value: 57, percent: 1.3 },
  { value: 58, percent: 1.3 },
  { value: 59, percent: 1.3 },
  { value: 60, percent: 1.3 },
  { value: 61, percent: 1.3 },
  { value: 62, percent: 1.3 },
  { value: 63, percent: 1.3 },
  { value: 64, percent: 1.3 },
  { value: 65, percent: 1.3 },
  { value: 66, percent: 1.3 },
  { value: 67, percent: 1.3 },
  { value: 68, percent: 1.3 },
  { value: 69, percent: 1.3 },
  { value: 70, percent: 1.3 },
  { value: 71, percent: 1.3 },
  { value: 72, percent: 1.3 },
  { value: 73, percent: 1.3 },
  { value: 74, percent: 1.3 },
  { value: 75, percent: 1.3 },
  { value: 76, percent: 1.3 },
  { value: 77, percent: 1.3 },
  { value: 78, percent: 1.3 },
  { value: 79, percent: 1.3 },
  { value: 80, percent: 1.3 },
  { value: 81, percent: 1.3 },
  { value: 82, percent: 1.3 },
  { value: 83, percent: 1.3 },
  { value: 84, percent: 1.3 },
  { value: 85, percent: 1.3 },
  { value: 86, percent: 1.3 },
  { value: 87, percent: 1.3 },
  { value: 88, percent: 1.3 },
  { value: 89, percent: 1.3 },
  { value: 90, percent: 1.3 },
  { value: 91, percent: 1.3 },
  { value: 92, percent: 1.3 },
  { value: 93, percent: 1.3 },
  { value: 94, percent: 1.3 },
  { value: 95, percent: 1.3 },
  { value: 96, percent: 1.3 },
  { value: 97, percent: 1.3 },
  { value: 98, percent: 1.3 },
  { value: 99, percent: 1.3 },
  { value: 100, percent: 1.3 },
];

const BED_LENGENDARY_QUALITY_PERCENT = [
  { value: 50, percent: 0.7 },
  { value: 51, percent: 0.7 },
  { value: 52, percent: 0.7 },
  { value: 53, percent: 0.7 },
  { value: 54, percent: 0.7 },
  { value: 55, percent: 0.7 },
  { value: 56, percent: 0.7 },
  { value: 57, percent: 0.7 },
  { value: 58, percent: 0.7 },
  { value: 59, percent: 0.7 },
  { value: 60, percent: 0.7 },
  { value: 61, percent: 0.7 },
  { value: 62, percent: 0.7 },
  { value: 63, percent: 0.7 },
  { value: 64, percent: 0.7 },
  { value: 65, percent: 0.7 },
  { value: 66, percent: 0.7 },
  { value: 67, percent: 0.7 },
  { value: 68, percent: 0.7 },
  { value: 69, percent: 0.7 },
  { value: 70, percent: 0.7 },
  { value: 71, percent: 0.7 },
  { value: 72, percent: 0.7 },
  { value: 73, percent: 0.7 },
  { value: 74, percent: 0.7 },
  { value: 75, percent: 0.7 },
  { value: 76, percent: 0.7 },
  { value: 77, percent: 0.7 },
  { value: 78, percent: 0.7 },
  { value: 79, percent: 0.7 },
  { value: 80, percent: 0.7 },
  { value: 81, percent: 0.7 },
  { value: 82, percent: 0.7 },
  { value: 83, percent: 0.7 },
  { value: 84, percent: 0.7 },
  { value: 85, percent: 0.7 },
  { value: 86, percent: 0.7 },
  { value: 87, percent: 0.7 },
  { value: 88, percent: 0.7 },
  { value: 89, percent: 0.7 },
  { value: 90, percent: 0.7 },
  { value: 91, percent: 0.7 },
  { value: 92, percent: 0.7 },
  { value: 93, percent: 0.7 },
  { value: 94, percent: 0.7 },
  { value: 95, percent: 0.7 },
  { value: 96, percent: 0.7 },
  { value: 97, percent: 0.7 },
  { value: 98, percent: 0.7 },
  { value: 99, percent: 0.7 },
  { value: 100, percent: 0.7 },
  { value: 101, percent: 0.7 },
  { value: 102, percent: 0.7 },
  { value: 103, percent: 0.7 },
  { value: 104, percent: 0.7 },
  { value: 105, percent: 0.7 },
  { value: 106, percent: 0.7 },
  { value: 107, percent: 0.7 },
  { value: 108, percent: 0.7 },
  { value: 109, percent: 0.7 },
  { value: 110, percent: 0.7 },
  { value: 111, percent: 0.7 },
  { value: 112, percent: 0.7 },
  { value: 113, percent: 0.7 },
  { value: 114, percent: 0.7 },
  { value: 115, percent: 0.7 },
  { value: 116, percent: 0.7 },
  { value: 117, percent: 0.7 },
  { value: 118, percent: 0.7 },
  { value: 119, percent: 0.7 },
  { value: 120, percent: 0.7 },
  { value: 121, percent: 0.7 },
  { value: 122, percent: 0.7 },
  { value: 123, percent: 0.7 },
  { value: 124, percent: 0.7 },
  { value: 125, percent: 0.7 },
  { value: 126, percent: 0.7 },
  { value: 127, percent: 0.7 },
  { value: 128, percent: 0.7 },
  { value: 129, percent: 0.7 },
  { value: 130, percent: 0.7 },
  { value: 131, percent: 0.7 },
  { value: 132, percent: 0.7 },
  { value: 133, percent: 0.7 },
  { value: 134, percent: 0.7 },
  { value: 135, percent: 0.7 },
  { value: 136, percent: 0.7 },
  { value: 137, percent: 0.7 },
  { value: 138, percent: 0.7 },
  { value: 139, percent: 0.7 },
  { value: 140, percent: 0.7 },
  { value: 141, percent: 0.7 },
  { value: 142, percent: 0.7 },
  { value: 143, percent: 0.7 },
  { value: 144, percent: 0.6 },
  { value: 145, percent: 0.6 },
  { value: 146, percent: 0.6 },
  { value: 147, percent: 0.6 },
  { value: 148, percent: 0.6 },
  { value: 149, percent: 0.6 },
  { value: 150, percent: 0.6 },
  { value: 151, percent: 0.6 },
  { value: 152, percent: 0.6 },
  { value: 153, percent: 0.6 },
  { value: 154, percent: 0.6 },
  { value: 155, percent: 0.6 },
  { value: 156, percent: 0.6 },
  { value: 157, percent: 0.6 },
  { value: 158, percent: 0.6 },
  { value: 159, percent: 0.6 },
  { value: 160, percent: 0.6 },
  { value: 161, percent: 0.6 },
  { value: 162, percent: 0.6 },
  { value: 163, percent: 0.6 },
  { value: 164, percent: 0.6 },
  { value: 165, percent: 0.6 },
  { value: 166, percent: 0.6 },
  { value: 167, percent: 0.6 },
  { value: 168, percent: 0.6 },
  { value: 169, percent: 0.6 },
  { value: 170, percent: 0.6 },
  { value: 171, percent: 0.6 },
  { value: 172, percent: 0.6 },
  { value: 173, percent: 0.6 },
  { value: 174, percent: 0.6 },
  { value: 175, percent: 0.6 },
  { value: 176, percent: 0.6 },
  { value: 177, percent: 0.6 },
  { value: 178, percent: 0.6 },
  { value: 179, percent: 0.6 },
  { value: 180, percent: 0.6 },
  { value: 181, percent: 0.6 },
  { value: 182, percent: 0.6 },
  { value: 183, percent: 0.6 },
  { value: 184, percent: 0.6 },
  { value: 185, percent: 0.6 },
  { value: 186, percent: 0.6 },
  { value: 187, percent: 0.6 },
  { value: 188, percent: 0.6 },
  { value: 189, percent: 0.6 },
  { value: 190, percent: 0.6 },
  { value: 191, percent: 0.6 },
  { value: 192, percent: 0.6 },
  { value: 193, percent: 0.6 },
  { value: 194, percent: 0.6 },
  { value: 195, percent: 0.6 },
  { value: 196, percent: 0.6 },
  { value: 197, percent: 0.6 },
  { value: 198, percent: 0.6 },
  { value: 199, percent: 0.6 },
  { value: 200, percent: 0.6 },
];

const commonDB = async (a) => {
  for (const e of BED_COMMON_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "common",
      attribute: "efficiency",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_COMMON_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "common",
      attribute: "luck",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_COMMON_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "common",
      attribute: "bonus",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_COMMON_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "common",
      attribute: "special",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_COMMON_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "common",
      attribute: "resilience",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
};

const uncommonDB = async (a) => {
  for (const e of BED_UNCOMMON_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "uncommon",
      attribute: "efficiency",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_UNCOMMON_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "uncommon",
      attribute: "luck",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_UNCOMMON_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "uncommon",
      attribute: "bonus",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_UNCOMMON_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "uncommon",
      attribute: "special",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_UNCOMMON_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "uncommon",
      attribute: "resilience",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
};

const rateDB = async (a) => {
  for (const e of BED_RARE_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "rate",
      attribute: "efficiency",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_RARE_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "rate",
      attribute: "luck",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_RARE_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "rate",
      attribute: "bonus",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_RARE_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "rate",
      attribute: "special",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_RARE_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "rate",
      attribute: "resilience",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
};

const epicDB = async (a) => {
  for (const e of BED_EPIC_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "epic",
      attribute: "efficiency",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_EPIC_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "epic",
      attribute: "luck",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_EPIC_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "epic",
      attribute: "bonus",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_EPIC_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "epic",
      attribute: "special",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_EPIC_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "epic",
      attribute: "resilience",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
};

const lengendaryDB = async (a) => {
  for (const e of BED_LENGENDARY_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "legendery",
      attribute: "efficiency",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_LENGENDARY_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "legendery",
      attribute: "luck",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_LENGENDARY_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "legendery",
      attribute: "bonus",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_LENGENDARY_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "legendery",
      attribute: "special",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
  for (const e of BED_LENGENDARY_QUALITY_PERCENT) {
    a.push({
      type: "bed",
      quality: "legendery",
      attribute: "resilience",
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  }
};

const genarateDB = async () => {
  let a = [];
  await commonDB(a);
  await uncommonDB(a);
  await rateDB(a);
  await epicDB(a);
  await lengendaryDB(a);
  fs.appendFileSync(
    `db.js`,
    `${JSON.stringify(a)}\n`,
    function(err) {
      console.log(a);
    }
  );
};
// genarateDB();

const FEE_COMMON_COMMON = [
  [600, 600, 750, 1050, 1200, 1350, 1500],
  [600, 600, 750, 1200, 1350, 1500, 1650],
  [750, 750, 900, 1350, 1500, 1650, 1800],
  [1050, 1200, 1350, 1500, 1650, 1800, 1950],
  [1200, 1350, 1500, 1650, 1800, 1950, 2100],
  [1350, 1500, 1650, 1800, 1950, 2100, 2250],
  [1500, 1650, 1800, 1950, 2100, 2250, 2400]
]

const FEE_UNCOMMON_UNCOMMON = [
  [2400, 2400, 3000, 3150, 3600, 4050, 4500],
  [2400, 2400, 3000, 3600, 4050, 4500, 4950],
  [3000, 3000, 3600, 4050, 4500, 4950, 5400],
  [3150, 3600, 4050, 4500, 4950, 5400, 5850],
  [3600, 5550, 4500, 4950, 5400, 5850, 6300],
  [4050, 4500, 4950, 5400, 5850, 6300, 6750],
  [4500, 4950, 5400, 5850, 6300, 6750, 7200]
]

const FEE_COMMON_UNCOMMON = [
  [780, 780, 975, 1365, 1560, 1755, 1950],
  [780, 780, 975, 1560, 1755, 1950, 2145],
  [975, 975, 1170, 1755, 1950, 2145, 2340],
  [1365, 1560, 1755, 1950, 2145, 2340, 2535],
  [1560, 1755, 1950, 2145, 2340, 2535, 2730],
  [1755, 1950, 2145, 2340, 2535, 2730, 2925],
  [1950, 2145, 2340, 2535, 2730, 2925, 3120]
]

const feeDB = async (a,arr, quality1, quality2) => {
  arr.map((element1,index1) => {
    element1.map((element2, index2) => {
      a.push({
        quality1: quality1,
        quality2: quality2,
        level1: index1,
        level2: index2,
        fee: element2,
      });
    })
  });
}

const genarateFeeDB1 = async () => {
  let a = [];
  await feeDB(a, FEE_COMMON_COMMON, "common", "common");
  await feeDB(a, FEE_COMMON_UNCOMMON, "common", "uncommon");
  await feeDB(a, FEE_UNCOMMON_UNCOMMON, "uncommon", "uncommon");
  fs.appendFileSync(
    `dbFee.js`,
    `${JSON.stringify(a)}\n`,
    function(err) {
      console.log(a);
    }
  );
};
const checkString = async (parent1, parent2) => {
  console.log("parent1: ", parent1);
  console.log("parent2: ", parent2);
  if (parent1.toString() < parent2.toString()) {
    console.log('1');
  } else {
    console.log('2');
  }
}
// checkString('encommon', 'uncommon')
// genarateFeeDB1();

const ATTRIBUTE_POINT_COMMON = [
  { value: 2, percent: 18 },
  { value: 3, percent: 14 },
  { value: 4, percent: 44 },
  { value: 5, percent: 12 },
  { value: 6, percent: 8 },
  { value: 7, percent: 4 }
]

const ATTRIBUTE_POINT_UNCOMMON = [
  { value: 4, percent: 30 },
  { value: 5, percent: 22 },
  { value: 6, percent: 15 },
  { value: 7, percent: 10 },
  { value: 8, percent: 8 },
  { value: 9, percent: 6 },
  { value: 10, percent: 4 },
  { value: 11, percent: 3 },
  { value: 12, percent: 2 }
]
const levelUp = async (a,arr, quality) => {
  arr.map((e) => {
    a.push({
      quality: quality,
      value: e.value,
      weigh: String(e.percent),
      percent: String(e.percent),
    });
  });
}

const generateLevelUpPoint = async () => {
  let a = [];
  await levelUp(a, ATTRIBUTE_POINT_COMMON, "common");
  await levelUp(a, ATTRIBUTE_POINT_UNCOMMON, "uncommon");
  fs.appendFileSync(
    `levelUpPoint.js`,
    `${JSON.stringify(a)}\n`,
    function(err) {
      console.log(a);
    }
  );
}
generateLevelUpPoint()