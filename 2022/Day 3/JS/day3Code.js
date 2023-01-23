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

// Part 1
// Find the sum of the priority of the matching items
const prioritySum = (array) => {
  let sum = 0;
  for (let rucksack = 0; rucksack < array.length; rucksack++) {
    let match = itemType(array[rucksack]);
    if (testCase(match) === true) {
      sum += match.charCodeAt(0) - 38;
    } else {
      sum += match.charCodeAt(0) - 96;
    }
  }
  console.log(sum);
};

// Part 2

// Seperate into groups of 3 rucksacks
const splitIntoGroups = (array) => {
  let group = [];
  for (let rucksack = 0; rucksack < array.length; rucksack++) {
    if (rucksack % 3 === 0) {
      group.push([array[rucksack]]);
    } else {
      group[group.length - 1].push(array[rucksack]);
    }
  }
  return group;
};

const finalSum = (array) => {
  let sum = 0;
  for (let item = 0; item < array.length; item++) {
    if (testCase(array[item]) === true) {
      sum += array[item].charCodeAt(0) - 38;
    } else {
      sum += array[item].charCodeAt(0) - 96;
    }
  }
  return sum;
};

const threeBagMatch = (group) => {
  const bagOne = group[0];
  const bagTwo = group[1];
  const bagThree = group[2];
  let match = "";

  console.log("Bag One", bagOne);
  console.log("Bag Two", bagTwo);
  console.log("Bag Three", bagThree);

  // Run an iterative comparison function to check each item in the first rucksack
  // against the items in the second and third rucksacks.
  for (let itemToCompare = 0; itemToCompare < bagOne.length; itemToCompare++) {
    console.log('letter being compared is ====> ', bagOne[itemToCompare]);
    if (match === "") {
      // If the letter in bag one matches the letter in bag two
      console.log(bagTwo.indexOf(bagOne[itemToCompare]) !=-1 )
      if (bagTwo.indexOf(bagOne[itemToCompare]) !== -1) {
        // If the letter in bag one matches the letter in bag three
        if (bagThree.indexOf(bagOne[itemToCompare]) !== -1) {
          match = bagOne[itemToCompare];
          console.log('match found', match);
        }
      }
    }
  }
  return match;
};

// Find the sum of the priorities that appeear in each group of 3 rucksacks
const prioritySumOf3 = (array) => {
  let matchArray = [];
  let sum = 0;
  const groups = splitIntoGroups(array);
  for (
    let individualGroup = 0;
    individualGroup < groups.length;
    individualGroup++
  ) {
    matchArray.push(threeBagMatch(groups[individualGroup]));
  }
  console.log(finalSum(matchArray));
};

// prioritySum(dataArray);
prioritySumOf3(dataArray);
