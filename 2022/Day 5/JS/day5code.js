// Pull the moves from the input file:
const fs = require("fs");

const inputFileData = fs.readFileSync("../2022/Day 5/moves.txt", "utf8");
dataArray = inputFileData.split("\r\n");

testArray = [
  "move 2 from 5 to 9",
  "move 3 from 1 to 7",
  "move 2 from 3 to 9",
  "move 6 from 9 to 5",
  "move 2 from 3 to 8",
  "move 9 from 7 to 8",
  "move 15 from 8 to 9"
];

// console.log(dataArray);

// We've got 3 input numbers. The number of crates to move, a FROM and a TO. 
// And we have an array of objects representing each stack of crates 

const crateSorter = (dataArray) => {
  // Columns as an array of objects
  let columns = [
    { id: 1, contents: "SZPDLBFC" },
    { id: 2, contents: "NVGPHWB" },
    { id: 3, contents: "FWBJG" },
    { id: 4, contents: "GJNFLWCS" },
    { id: 5, contents: "WJLTPMSH" },
    { id: 6, contents: "BCWGFS" },
    { id: 7, contents: "HTPMQBW" },
    { id: 8, contents: "FSWT" },
    { id: 9, contents: "NCR" },
  ];

  // Loop through the data array
  for (let instruction = 0; instruction < dataArray.length; instruction++) {
    // Establish the variables to store the relevant data
    let numberOfCrates = 0;
    let from = null;
    let to = null;

    // extract the 3 relevant pieces of data and store in variables
    let numbers = dataArray[instruction].match(/\d+/g);
    numberOfCrates = numbers[0];
    from = numbers[1];
    to = numbers[2];

    console.log(
      `For instruction ${instruction + 1}, the number of crates to move
      is ${numberOfCrates}, the FROM column is ${from} (${
        columns[from - 1].contents
      })
      and the TO column is ${to} (${columns[to - 1].contents})`
    );

    // Get the FROM column letters
    let pushedLetters = columns[from - 1].contents.slice(
      columns[from - 1].contents.length - numberOfCrates
    );
    // console.log("pushed letters are ====> ", pushedLetters);

    // Get the TO column letters and concat the sliced letters from the FROM column
    let result = columns[to - 1].contents.concat(pushedLetters);

    // Update the contents of the TO column
    columns[to - 1].contents = result;

    // Finally update the FROM column
    columns[from - 1].contents = columns[from - 1].contents.slice(
      0,
      columns[from - 1].contents.length - numberOfCrates
    );
    console.log("Confirm FROM column updated", columns[from - 1]);
    console.log("confirm TO column updated", columns[to - 1]);
  }

  // Once the for loop has finished, find the top crate in each stack.
  for (let stackIndex = 0; stackIndex <= 8; stackIndex++) {
    console.log('Full stack', columns[stackIndex].contents)
    console.log(
      columns[stackIndex].contents.slice(
        columns[stackIndex].contents.length - 1
      )
    );
  }
};

crateSorter(dataArray);
