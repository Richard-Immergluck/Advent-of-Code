/*

--- DAY 7: No Space Left On Device ---

We have a file system that contains directories and files along with the file sizes and we have
a set of actions that are performed within the file system as the user browses. The question is
asking us to find all the directories with a total size no greater than 100000. The tital size
of the sum of these directories is the answer to part 1. 

My first thoughts with this question is to create a dictionary containing the directories and 
any files inside. With the dictionary creating the structure of the file system hopefully it 
will be possible then to loop through the dictionary finding the total size of each directory
and then find the relevant directories to sum up for the answer to part 1. 

I think an dictionary isn't going to work as needed because of scope of the system. Perhaps 
arrays would suite better?

*/

const fs = require('fs');

const testScript = fs.readFileSync("../2022/Day 7/testinput.txt", "utf8").split("\r\n");
// result is 95437

const createFileSystem = (script) => {
  
  // Declare variables 
  let fileSystem = [];

  // To start we need a loop running through the script one line at a time and then deducing 
  // what that line's instructions are. 

  for (let line = 0; line < script.length; line++) {
    // Now I think we'll need some more variables to keep track of where we are in the file system.
    currentDirectory = '/'

    // I'm feeling that the 'ls' line can be ignored?

    // If statement to ascertain if the line is a directory or file and create the required object
    if (script[line].includes('dir')) {
      let directoryName = script[line].slice(4)// do something
      fileSystem.push([directoryName])
    }
  }

  console.log(fileSystem)

  return 
} 

if (createFileSystem(testScript) === 95437) {
  console.log("Test script passed");
} else { 
  console.log("Test script failed");
}



