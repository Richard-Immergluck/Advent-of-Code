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

  I've spent a while on this and looked at some other solutions and what seems to 
  be a common thread is to use a matrix/array of arrays. Then by basically turning
  the forest into a grid with x and y axes you can then iterate over the whole area
  checking each tree using it's coordinates and a preset maximum height. Basically,
  if you can see a tree then the max hight is set to that tree and then you move on
  to the next one in the line only if it's bigger than the previous max height then
  it will be visible.  

*/

import { readFileSync } from "node:fs";

const lines = readFileSync("../2022/Day 8/testData.txt", "utf8")
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((line) => [...line].map(Number)); // The map function returns an array of
// arrays and then each entry in the
// arrays is turned into a number

// Simple function to add the visible tree to the set (visible)
const setVisible = (y, x, visible) => {
  visible.add(`${y}-${x}`);
};

// Function to check rows and columns
// We need the coordinates, the direction of movement, the dataset, and the visible SET
const checkLine = (y, x, yDirection, xDirection, map, visible) => {
  setVisible(y, x, visible); // We know that the first tree on all sides is visible
  let maxHeight = map[y][x];
  while (true) {
    y += yDirection;
    x += xDirection;
    if (y < 0 || y >= map.length || x < 0 || x >= map[y].length) {
      break;
    }
    if (map[y][x] > maxHeight) {
      maxHeight = map[y][x];
      setVisible(y, x, visible);
    }
  }
};

const part1 = () => {
  /* 
    Use a set here to avoid duplication when using .add() 
    From MDN:
    The add() method inserts a new element with a specified value 
    in to a Set object, if there isn't an element with the same 
    value already in the Set.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
  */
  const visible = new Set();
  // all columns
  for (let i = 0; i < lines[0].length; i++) {
    checkLine(0, i, 1, 0, lines, visible);
    checkLine(lines.length - 1, i, -1, 0, lines, visible);
  }
  // all rows
  for (let i = 0; i < lines.length; i++) {
    checkLine(i, 0, 0, 1, lines, visible);
    checkLine(i, lines[0].length - 1, 0, -1, lines, visible);
  }

  console.log(visible.size);
};

const part2 = () => {};

part1();
part2();
