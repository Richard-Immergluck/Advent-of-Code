// Pull the moves from the input file:
const fs = require("fs");

const inputFileData = fs.readFileSync("../2022/Day 5/moves.txt", "utf8");
dataArray = inputFileData.split("\r\n");

console.log(dataArray);

// Columns
let column1 = "SZPDLBFC";
let column2 = "NVGPHWB";
let column3 = "FWBJG";
let column4 = "GJNFLWCS";
let column5 = "WJLTPMSH";
let column6 = "BCWGFS";
let column7 = "HTPMQBW";
let column8 = "FSWT";
let column9 = "NCR";

// We've got 3 input numbers. The number of crates to move, a FROM and a TO

const crateSorter = (dataArray) => {
  
  // Loop through the data array
  for (let instruction = 0; instruction <= dataArray.length; instruction++) {
    let numbers = dataArray[instruction].match(/\d+/g);
    // extract the 3 relevant pieces of data
    console.log(numbers);
  }

  // manipulate the columns accordingly.
  let numberOfCrates = 0;
  let from = null;
  let two = null;
};

crateSorter(dataArray);
