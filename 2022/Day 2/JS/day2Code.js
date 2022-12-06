const fs = require("fs");

dictionary = {
[['A', 'X']] : 4, [['B', 'Y']] : 5, [['C', 'Z']] : 6, // Draw
[['A', 'Y']] : 8, [['B', 'Z']] : 9, [['C', 'X']] : 7, // Win
[['A', 'Z']] : 3, [['B', 'X']] : 1, [['C', 'Y']] : 2, // Lose
}

fs.readFile("../2022/Day 2/input.txt", "utf8", (err, data) => {
  if (err) throw err;
  dataToString = data.toString().split("\r\n");
  const dataSplit = dataToString.map((item) => item.split(" "));
  totalScore = 0;
  for (let game = 0; game < dataSplit.length; game++) {
    let gameArray = [];
    for (let choice = 0; choice < dataSplit[game].length; choice++) {
      gameArray.push(dataSplit[game][choice]);
    }
    // Part one
    // if (
    //   (gameArray[0] === "A" && gameArray[1] === "X") ||
    //   (gameArray[0] === "B" && gameArray[1] === "Y") ||
    //   (gameArray[0] === "C" && gameArray[1] === "Z")
    // ) {
    //   console.log("Draw!");
    //   totalScore += 3;
    //   if (gameArray[1] === "X") {
    //     totalScore += 1;
    //   } else if (gameArray[1] === "Y") {
    //     totalScore += 2;
    //   } else if (gameArray[1] === "Z") {
    //     totalScore += 3;
    //   }
    // }
    // if (
    //   (gameArray[0] === "A" && gameArray[1] === "Y") ||
    //   (gameArray[0] === "B" && gameArray[1] === "Z") ||
    //   (gameArray[0] === "C" && gameArray[1] === "X")
    // ) {
    //   console.log("Yo win!");
    //   totalScore += 6;
    //   if (gameArray[1] === "X") {
    //     totalScore += 1;
    //   } else if (gameArray[1] === "Y") {
    //     totalScore += 2;
    //   } else if (gameArray[1] === "Z") {
    //     totalScore += 3;
    //   }
    // }
    // if (
    //   (gameArray[0] === "A" && gameArray[1] === "Z") ||
    //   (gameArray[0] === "B" && gameArray[1] === "X") ||
    //   (gameArray[0] === "C" && gameArray[1] === "Y")
    // ) {
    //   console.log("Yo Lose!");
    //   if (gameArray[1] === "X") {
    //     totalScore += 1;
    //   } else if (gameArray[1] === "Y") {
    //     totalScore += 2;
    //   } else if (gameArray[1] === "Z") {
    //     totalScore += 3;
    //   }
    // }

    if (gameArray[1] === "X") {
      console.log("Need to Lose");
      if (gameArray[0] === "A") {
        // Opponent plays 'ROCK' and I chose 'SCISSORS'
        totalScore += 3;
      }
      if (gameArray[0] === "B") {
        // Opponent plays 'PAPER' = I chose 'ROCK'
        totalScore += 1;
      }
      if (gameArray[0] === "C") {
        // Opponent plays 'SCISSORS' = I chose 'PAPER'
        totalScore += 2;
      }
    }
    if (gameArray[1] === "Y") {
      console.log("Need to Draw");
      if (gameArray[0] === "A") {
        // Opponent plays 'ROCK' and I chose 'ROCK'
        totalScore += 4;
      }
      if (gameArray[0] === "B") {
        // Opponent plays 'PAPER' = I chose 'PAPER'
        totalScore += 5;
      }
      if (gameArray[0] === "C") {
        // Opponent plays 'SCISSORS' = I chose 'SCISSORS'
        totalScore += 6;
      }
    }
    if (gameArray[1] === "Z") {
      console.log("Need to Win");
      if (gameArray[0] === "A") {
        // Opponent plays 'ROCK' and I chose 'PAPER'
        totalScore += 8;
      }
      if (gameArray[0] === "B") {
        // Opponent plays 'PAPER' = I chose 'SCISSORS'
        totalScore += 9;
      }
      if (gameArray[0] === "C") {
        // Opponent plays 'SCISSORS' = I chose 'ROCK'
        totalScore += 7;
      }
    }
  }
  console.log(totalScore);
});

const A = 1; // Rock
const B = 2; // Paper
const C = 3; // Scissors

const X = 1; // Rock
const Y = 2; // Paper
const Z = 3; // Scissors
