/*

--- DAY 7: No Space Left On Device ---

We have a file system that contains directories and files along with the file sizes and we have
a set of actions that are performed within the file system as the user browses. The question is
asking us to find all the directories with a total size no greater than 100000. The tital size
of the sum of these directories is the answer to part 1. 


*/

const fs = require('fs');

const testScript = fs.readFileSync("../2022/Day 7/testinput.txt", "utf8").split("\r\n");
// result is 95437

console.log(testScript);



