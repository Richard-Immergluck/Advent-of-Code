testString = "BccTFfTPTsffdDDqsq";

const fs = require("fs");

fs.readFile("../2022/Day 3/input.txt", "utf8", (err, data) => {
  if (err) throw err;
  dataToString = data.toString().split("\r\n");
  // console.log(dataToString);
});

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
  // https://www.w3schools.com/jsref/jsref_indexof_array.asp
  for (
    let itemToCompare = 0;
    itemToCompare < compartment1.length;
    itemToCompare++
  ) {
    if (compartment2.indexOf(compartment1[itemToCompare]) !== -1) {
      match += compartment1[itemToCompare];
      // console.log("the match is ", match);
    }
  }
  return match;
};

// Find the sum of the priority of the matching items
const prioritySum = (string) => {
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let isCapital = false;
let prioritySum = 0;
const match = itemType(string);
console.log("The character is", match, "and its score is", match.charCodeAt(0)-96)
};

prioritySum(testString);
