/*

--- DAY 7: No Space Left On Device ---

We have a file system that contains directories and files along with the file sizes and we have
a set of actions that are performed within the file system as the user browses. The question is
asking us to find all the directories with a total size no greater than 100000. The total size
of the sum of these directories is the answer to part 1. 

My first thoughts with this question is to create a dictionary containing the directories and 
any files inside. With the dictionary creating the structure of the file system hopefully it 
will be possible then to loop through the dictionary finding the total size of each directory
and then find the relevant directories to sum up for the answer to part 1. 

Having done some research and back and forth here, it seems that the dictionary (object) idea 
is a good approach. Parsing the lines into a function that will create the structure of the 
file system with directories and files means I can then search through it to find the answers.

*/

const fs = require("fs");

const testScript = fs
  .readFileSync("../2022/Day 7/testinput.txt", "utf8")
  .split("\r\n");
// result is 95437 for this test

const createFileSystem = (script) => {
  // Declare variables
  let fileSystem = {};

  // To start we need a loop running through the script one line at a time and then deducing
  // what that line's instructions are.

  console.log(fileSystem);
  return fileSystem
}

// Function to return the total size of all files under 100000 (Part 1)
const sizeParser = () => {
  return null
}


const part1 = (script) => {

  const fileSystem = createFileSystem(script)

  
  // Tests
  if (sizeParser(fileSystem) === 95437) {
    console.log("Test script passed");
  } else {
    console.log("Test script failed");
  }
};

// const part2 = () => {
//   const input = getInput();
//   //do something here
// }

part1(testScript);
// part2();