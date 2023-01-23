const fs = require("fs");

const testArray = [
  "31-31,32-40",
  "26-92,13-91",
  "9-90,29-91",
  "72-72,25-73",
  "28-79,79-79",
  "52-77,53-53",
];

const inputFileData = fs.readFileSync("../2022/Day 4/input.txt", "utf8");
dataArray = inputFileData.split("\r\n");

const containedPairFinder = (testArray) => {
  let tally = 0
  for (let arrayPair = 0; arrayPair < testArray.length; arrayPair++) {
    let A = 0
    let B = 0 
    let X = 0
    let Y = 0

    splitArray = testArray[arrayPair].split(",")
    ABnumbers = splitArray[0].split("-")
    A = +ABnumbers[0]
    B = +ABnumbers[1]
    XYnumbers = splitArray[1].split("-")
    X = +XYnumbers[0]
    Y = +XYnumbers[1]

    // // right group contains left group    
    // // left group contains right group    
    // // if right group contain only one field
    // // if left group contains online one field

    // Conditionals as one line
    if ((A <= X && B>=Y) || (X <= A && Y>=B) || (X === Y && (A <= X && X <= B)) || (A === B && (X <= A && A <= Y)))
    console.log('contained pair found!!!', testArray[arrayPair])
    tally++
  }
  console.log(tally)
};

containedPairFinder(dataArray)