const fs = require("fs");

const testString = "qhRmTpzpzVzmTTbmVhWWWpVvDtsLVlwBVHvSsDCvvBDl";
const testArray = [
  "BccTFfTPTsffdDDqsq",
  "lGGLQwFhDgWdqvhW",
  "wbLNjGjlwLFrpSbllrHnHHRmmJVBmZJRRVcBTc",
];
const inputFileData = fs.readFileSync("../2022/Day 3/input.txt", "utf8");
dataArray = inputFileData.split("\r\n");

// Function to find the matched item from each compartment in the rucksack
const itemType = (string) => {
  // console.log("the string going into the itemType function is", string);
  let compartment1 = [];
  let compartment2 = [];
  let match = "";

  // First split the string into two equal halves
  for (let item = 0; item < string.length; item++) {
    if (item <= string.length / 2 - 1) {
      compartment1.push(string[item]);
    } else {
      compartment2.push(string[item]);
    }
  }

  // Use indexOf to find the matching item
  for (
    let itemToCompare = 0;
    itemToCompare < compartment1.length;
    itemToCompare++
  ) {
    if (match.length > 0) {
      break;
    } else if (compartment2.indexOf(compartment1[itemToCompare]) !== -1) {
      match += compartment1[itemToCompare];
    }
  }
  return match;
};

// Function to test if the letter is upper case (true) or lower case (false)
const testCase = (char) => {
  if (char === char.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

// Find the sum of the priority of the matching items
const prioritySum = (array) => {
  let prioritySum = 0;
  for (let rucksack = 0; rucksack < array.length; rucksack++) {
    let match = itemType(array[rucksack]);
    // console.log("the resulting match from the itemType function is", match);
    if (testCase(match) === true) {
      // console.log("upper case and score to add is ", match.charCodeAt(0) - 38)
      prioritySum += match.charCodeAt(0) - 38;
    } else {
      // console.log("lower case and score to add is ", match.charCodeAt(0) - 96)
      prioritySum += match.charCodeAt(0) - 96;
    }
    console.log("The character is", match, "and the score is", prioritySum);
  }
};

// prioritySum(testString);
prioritySum(dataArray);
