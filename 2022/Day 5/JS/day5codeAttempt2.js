const fs = require("fs");

const inputFileData = fs.readFileSync("../2022/Day 5/input.txt", "utf8");
dataArray = inputFileData.split("\r\n");

// This time using arrays instead of objects AND
// Lets not cut corners but manually inputting the crate IDs

let crates = [[], [], [], [], [], [], [], [], []];

let crateIDMap = [1, 5, 9, 13, 17, 21, 25, 29, 33];

const crateStackCreator = (dataArray) => {
  // loop through the first 8 lines of the dataArray
  for (let line = 0; line < 8; line++) {
    // Loop through the crateIDMap array checking the dataArray character against the crateIDMap index
    for (let IDMapChar = 0; IDMapChar < crateIDMap.length; IDMapChar++) {
      // If the character is a space, skip to the next number
      if (dataArray[line].charAt(crateIDMap[IDMapChar]) === " ") {
        continue;
        // Else, push the character to the corresponding array
      } else {
        crates[IDMapChar].push(dataArray[line].charAt(crateIDMap[IDMapChar]));
      }
    }
  }
  return crates;
};

const crateShuffler = (dataArray) => {
  let cratesArray = crateStackCreator(dataArray);

  // Grab the instructions first
  // Loop through the dataArray starting at line 9
  for (let instruction = 10; instruction < dataArray.length; instruction++) {
    let numberOfCrates = 0;
    let from = null;
    let to = null;

    // extract the 3 relevant pieces of data and store in variables
    let numbers = dataArray[instruction].match(/\d+/g);
    numberOfCrates = numbers[0];
    from = numbers[1] - 1;
    to = numbers[2] - 1;

    console.log(
      `For instruction ${instruction - 9}, the number of crates to move
      is ${numberOfCrates}, the FROM column is ${from + 1} (${
        cratesArray[from]
      })
      and the TO column is ${to + 1} (${cratesArray[to]})`
    );

    // Pop the crates from the FROM stack and push them to the TO stack
    let pushedCrates = cratesArray[from].splice(0, numberOfCrates);

    // Push the crates to the TO stack
    // For part 2 simply remove the reverse() method
    cratesArray[to].unshift(...pushedCrates.reverse());
  }

  // Once the for loop has finished, find the top crate in each stack.
  for (let stackIndex = 0; stackIndex <= 8; stackIndex++) {
    console.log(
      `The top crate in stack ${stackIndex + 1} is ${
        cratesArray[stackIndex][0]
      }`
    );
  }
};

crateShuffler(dataArray);

// It turns out my problem had more to do with not placing the
// shifted crates in the right order. The instructions state
// ONE AT A TIME which means that when shifting the crates the order
// IS REVERESED
