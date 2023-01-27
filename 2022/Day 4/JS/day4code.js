const fs = require("fs");

// const testArray = [
//   "31-31,32-40",
//   "26-92,13-91",
//   "9-90,29-91",
//   "72-72,25-73",
//   "28-79,79-79",
//   "52-77,53-53",
// ];

const inputFileData = fs.readFileSync("../2022/Day 4/input.txt", "utf8");
dataArray = inputFileData.split("\r\n");

const containedPairFinder = (dataArray) => {
  let tally = 0;
  for (let arrayPair = 0; arrayPair < dataArray.length; arrayPair++) {
    console.log("Current array pair is =====>", dataArray[arrayPair]);

    let A = 0;
    let B = 0;
    let X = 0;
    let Y = 0;

    splitArray = dataArray[arrayPair].split(",");
    console.log("Split Array pair is ====> ", splitArray);

    ABnumbers = splitArray[0].split("-");
    A = +ABnumbers[0];
    B = +ABnumbers[1];
    XYnumbers = splitArray[1].split("-");
    X = +XYnumbers[0];
    Y = +XYnumbers[1];

    console.log(
      `The left pair are ${A}, amd ${B} ---- The Right pair are ${X} and ${Y}`
    );

    // Part 1 conditionals
    // right group contains left group
    // left group contains right group
    // specific conditional for if right group contain only one field
    // specific conditional for if left group contains only one field

    // Part 2 conditionals
    // Right group overlaps left group
    // Left group overlaps right group?? Is this necessary --- yes it is

    // Conditionals as one line
    if (
      (A <= X && B >= Y) || // part 1
      (X <= A && Y >= B) || // part 1
      (X === Y && A <= X && X <= B) || // part 1
      (A === B && X <= A && A <= Y) || // part 1
      (A <= X && B >= X) || // part 2 
      (X <= A && Y >= A) // part 2
    ) {
      console.log("contained pair found!!!", dataArray[arrayPair]);
      tally++;
      console.log(tally);
    }
  }
  console.log(tally);
};

containedPairFinder(dataArray);
