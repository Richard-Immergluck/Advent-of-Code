/*

--- DAY 7: No Space Left On Device ---

*/

const fs = require("fs");

const testScript = fs
  .readFileSync("../2022/Day 7/testinput.txt", "utf8")
  .replace(/\r/g, "")
  .split("\n");
// result is 95437 for this test

const createFileSystem = (script) => {
  // Researching this, useful article about finite state machines at the following:
  // https://dev.to/spukas/finite-state-machine-in-javascript-1ki1#:~:text=%23javascript,and%20memory%20to%20play%20with.

  // The file system will need: name, isDirectory (boolean: false = is a file), 
  // size (if it's a file) and subdirectories (if it's a directory with subdirectories)
  // We're starting at the root so lets create that first
  let root = {
    name: "/",
    isDirectory: true,
    children: [],
  };

  // Now we need some variables to handle the changes in the directory and the relevant action we are taking. 
  let currentDirectory = root;
  let currentCommand = null;

  // create the file system
  for (const line of script) {
    if (line[0] === "$") {
      // This will be an action - change directory (there are three possible versions: "cd x", "cd .." and "cd /")
      // Use regex to find out what the required action is using named capturing group and non-capturing group
      // I was not previously aware that regex could do this. Thanks to awesome tutorial by youtuber thibpat for
      // Opening my eyes. Much, much more to learn here!

      // Also, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
      // for references

      const match = /\$ (?<command>\w+)(?: (?<arg>.+))?/.exec(line);
      // This returns some key/value pairs as well as an object called groups which has the command and
      // arg keys and values which can then be accessed

      currentCommand = match.groups.command;

      // now we need some if statementments for what to do if the command is cd or is ls
      // Command is "cd"
      if (currentCommand === "cd") {
        const target = match.groups.arg; 
        switch (target) {
          case "/":
            currentDirectory = root;
            break;
          case "..":
            currentDirectory = currentDirectory.parent;
            break;
          default:
            currentDirectory = currentDirectory.children.find(
              (folder) => folder.isDirectory && folder.name === target
            );
        }
      }
    } else {
      if (currentCommand === "ls") {
        // For now, it's a file/directory from a 'ls' command
        const fileMatch = /^(?<size>\d+) (?<name>.+)$/.exec(line);
        if (fileMatch) {
          const node = {
            name: fileMatch.groups.name,
            size: parseInt(fileMatch.groups.size),
            isDirectory: false,
            parent: currentDirectory,
          };
          currentDirectory.children.push(node);
        }
        const dirMatch = /^dir (?<name>.+)$/.exec(line);
        if (dirMatch) {
          const node = {
            name: dirMatch.groups.name,
            isDirectory: true,
            children: [],
            parent: currentDirectory,
          };
          currentDirectory.children.push(node);
        }
      } else {
        throw new Error("unkown state");
      }
    }
  }
  return root;
};

// It's becoming hard to read the file tree at this stage to lets create
// a file system printing function
const printFileSystem = (node, depth = 0) => {
  console.log(
    `${" ".repeat(depth * 2)}- ${node.name} \(${node.isDirectory ? "dir" : `file, size=${node.size}`
  })`
  )
  if (node.isDirectory) {
    for (const child of node.children) {
      printFileSystem(child, depth + 1);
    }
  }
}


// Function to return the total size of all files under 100000 (Part 1)
const sizeParser = (fileSystem) => {
  return null;
};

const part1 = (script) => {
  const fileSystem = createFileSystem(script);
  const readout = printFileSystem(fileSystem);
  console.log(readout)

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
