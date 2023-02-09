/* NB file type changed to .mjs for ES6 impoting syntax and other benefits 

--- Day 8: Treetop Tree House ---

- Each tree is represented as a single digit whose value is its height, where 
  0 is the shortest and 9 is the tallest.

- Tree is visible if all trees between it and edge of grid are SHORTER than it. 

- Only consider trees in in Cardinal direction for visibility

  
  OK so my thinking is to turn the input data into a series of rows and columns.

  Remember that a tree is VISIBLE if all trees in cardinal directions are smaller
  than it OR it is a tree on the outer edge.

  Ignoring the first row (we know it's visible already), take the second row and
  start at [1] then check if the numbers preceding and succeeding are smaller than
  that number. If you get any hits then that tree is VISIBLE and you can stop 
  checking. Add it to the total and go to the next tree on the line. If the number
  in the row is NOT VISIBLE then we will need to perform a check of that number's 
  column by using the row [index] as the number to find which column we need to check.
  
  At the end, add up all the visible trees from the above in addition to the ones
  in the outer-most layer of the forest and that should give us the answer. 


*/

import { readFileSync } from "node:fs";

const testDataPart1 = readFileSync("../2022/Day 8/testdata.txt", "utf8")
  .replace(/\r/g, "")
  .split("\n")
  .toString()
  .split(",");
// Part 1 result is 21 for this data

const calcBorder = (forest) => {
  const length = forest.length;
  const width = forest[0].length;

  const totalForestSize = length * width;
  const innerForestSize = (length - 2) * (width - 2);
  const borderTreeCount = totalForestSize - innerForestSize;

  return borderTreeCount;
};

const innerForestVisibilityCheck = (forest) => {
  let visibleTrees = 0;

  /*
  Ignoring the first row (we know it's visible already), take the second row and
  start at [1] then check if the numbers preceding and succeeding are smaller than
  that number. If you get any hits then that tree is VISIBLE and you can stop 
  checking. Add it to the total and go to the next tree on the line. If the number
  in the row is NOT VISIBLE then we will need to perform a check of that number's 
  column by using the row [index] as the number to find which column we need to check.
*/

  // iterate through each row of the forest and then each tree of the row
  for (let row = 1; row < forest.length; row++) {
    console.log(`The current row is ${forest[row]}`);
    let precedingTrees = [];
    let succeedingTrees = [];

    // populate the succeedingTrees variable
    for (let tree = forest[row].length - 1; tree > 0; tree--) {
      succeedingTrees.push(forest[row][tree]);
    }

    for (let tree = 0; tree < forest[row].length - 1; tree++) {
      if (tree !== 0) {
        console.log(`The current tree being checked is ${forest[row][tree]}`);
        console.log(`the preceding trees before check are ${precedingTrees}`);
        console.log(`the succeeding trees before check are ${succeedingTrees}`);
      }
      precedingTrees.push(forest[row][tree]);
      succeedingTrees.reverse().splice(0, 1);
      // console.log(succeedingTrees)
    }
  }

  return visibleTrees;
};

const part1 = () => {
  console.log(innerForestVisibilityCheck(testDataPart1));
  // Answer to Part 1
  // console.log(
  //   `The number of trees visible from outside the grid are ${
  //     calcBorder(testDataPart1) + innerForestVisibilityCheck(testDataPart1)
  //   }`
  // );
};

const part2 = () => {};

part1();
part2();
