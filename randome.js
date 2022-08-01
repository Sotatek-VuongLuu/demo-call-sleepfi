const fs = require("fs");
const { e } = require("mathjs");
const arr1 = [
  { value: 10, percent: 25 },
  { value: 11, percent: 20 },
  { value: 12, percent: 15 },
  { value: 13, percent: 12 },
  { value: 14, percent: 7 },
  { value: 15, percent: 5 }, // 10 %
  { value: 16, percent: 3 },
  { value: 17, percent: 2 },
  { value: 18, percent: 2 },
  { value: 19, percent: 2 },
  { value: 20, percent: 1 }, // 3%
  { value: 21, percent: 1 },
  { value: 22, percent: 1 },
  { value: 23, percent: 0.75 }, // 2%
  { value: 24, percent: 0.75 },
  { value: 25, percent: 0.5 },
  { value: 26, percent: 0.5 },
  { value: 27, percent: 0.5 }, //1%
  { value: 28, percent: 0.5 },
  { value: 29, percent: 0.25 },
  { value: 30, percent: 0.25 },
];

const arr2 = [
  { value: 1, percent: 11 },
  { value: 2, percent: 10 },
  { value: 3, percent: 9 },
  { value: 4, percent: 9 },
  { value: 5, percent: 8 },
  { value: 6, percent: 7 },
  { value: 7, percent: 6 },
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

const ATTRIBUTE_POINT_COMMON = [
  { value: 3, percent: 45 },
  { value: 4, percent: 25 },
  { value: 5, percent: 12 },
  { value: 6, percent: 8 },
  { value: 7, percent: 7 },
  { value: 8, percent: 5 },
  { value: 9, percent: 3 },
];

const ATTRIBUTE_POINT_UNCOMMON = [
  { value: 4, percent: 30 },
  { value: 5, percent: 22 },
  { value: 6, percent: 15 },
  { value: 7, percent: 10 },
  { value: 8, percent: 8 },
  { value: 9, percent: 6 },
  { value: 10, percent: 4 },
  { value: 11, percent: 3 },
  { value: 12, percent: 2 },
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
const getPersent = async () => {
  let sum = 0.0;
  BED_LENGENDARY_QUALITY_PERCENT.forEach((e) => (sum += e.percent));
  console.log(sum);
};
// getPersent();
const getRandomWithPercent = async (arr) => {
  const n = arr.length;
  const prob_value = [];
  const prob_find = [];
  arr.map((e, i) => {
    if (i == 0) {
      prob_value[0] = e.value;
      prob_find[0] = e.percent;
      return;
    }
    prob_value[i] = e.value;
    prob_find[i] = prob_find[i - 1] + e.percent;
  });
  const r = Math.random() * 100;
  let start = 0;
  let end = n - 1;
  while (end > start) {
    const mid = Math.floor((start + end) / 2);
    if (prob_find[mid] == r) return prob_value[mid];
    if (prob_find[mid] > r) end = mid;
    else start = mid + 1;
  }
  return prob_value[end];
};
const randome = async (number) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    let rl = await getRandomWithPercent(ATTRIBUTE_POINT_UNCOMMON);
    // if (rl == 30) { console.log("30")}
    sum += rl;
  }
  console.log("sum:", sum);
  console.log("avg: ", sum / number);
};
// randome(1000000);
const testPadStart = async (number) => {
  // let a = (String(Number(number)).padStart(5, "0"))
  // console.log("a: ", a);
  let a = [
    {
      a: "a",
      b: "s",
    },
    {
      a: "a",
      b: "s",
    },
  ];
  a = JSON.stringify(a);
  fs.appendFileSync("log.json", `${a}`, function(err) {});
};
// testPadStart(55236)
const testDiv = async (number, numberUncommon) => {
  let position = Math.floor(number / numberUncommon);
  console.log("position", position);
  console.log("randome: ", Math.floor(Math.random() * position));
};
// testDiv(3, 1)
const a = async () => {
  for (let i = 1; i <= 151; i++) {
    if (0.7 * i + 0.6 * (151 - i) == 100) {
      console.log(i);
    }
  }
};
// a();
const genatare = async () => {
  let count = 0;
  for (let i = 50; i <= 200; i++) {
    count++;
    if (count <= 94) {
      let a = { value: i, percent: 0.7 };
      console.log(a, ",");
    } else {
      let a = { value: i, percent: 0.6 };
      console.log(a, ",");
    }
  }
};
// genatare();

const hehe = async () => {
  let e = await hihi();
  console.log("e: ", e);
}

const hihi =async () => {
  const a = {
    a: 1,
    b: 2
  };
  return !!a;
}
hehe()