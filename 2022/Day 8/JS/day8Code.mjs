/* NB file type changed to .mjs for ES6 impoting syntax and other benefits 

--- Day 8: Treetop Tree House ---

- Each tree is represented as a single digit whose value is its height, where 0 is the shortest and 9 is the tallest.
This points to another object  with key:value pairs

- Tree is visible of all trees between it and edge of grid are SHORTER than it. 

- Only consider trees in in Cardinal direction


*/


import { readFileSync } from "node:fs";

const testData = readFileSync("../2022/Day 7/testinput.txt", "utf8")
  .replace(/\r/g, "")
  .split("\n");
// Part 1 result is 21 for this data

const part1 = () => {
  console.log(testData)
}

const part2 = () => {
  const input = getInput();
  //do something here
}

part1();
part2();