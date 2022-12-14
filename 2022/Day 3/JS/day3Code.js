testString = "BccTFfTPTsffdDDqsq";
testArray = ["BccTFfTPTsffdDDqsq", "lGGLQwFhDgWdqvhW", "wbLNjGjlwLFrpSbllrHnHHRmmJVBmZJRRVcBTc"]

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

// Function to test if the letter is upper case (true) or lower case (false)
const testCase = (char) => {
  if (char === char.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}


// Find the sum of the priority of the matching items
const prioritySum = (string) => {
let prioritySum = 0;
const match = itemType(string);
let isCapital = testCase(match);
if (testCase(match) === true) {
    prioritySum += match.charCodeAt(0)-64;
} else {
    prioritySum += match.charCodeAt(0)-96;
}
console.log("The character is", match, "and its score is", prioritySum)
console.log("is the character a capital???", isCapital)
};


prioritySum(testString);
