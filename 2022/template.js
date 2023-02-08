import { readFileSync } from "node:fs";

const lines = readFileSync("day??.txt", { encoding: "utf-8" }) // puzzle input
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...lines];
}

const part1 = () => {
  const input = getInput();
  //do something here
}

const part2 = () => {
  const input = getInput();
  //do something here
}

part1();
part2();