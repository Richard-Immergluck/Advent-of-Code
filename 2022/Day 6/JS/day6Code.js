/* 

--- Day 6: Tuning Trouble ---

*/

/* 
We have a string and we need to find the first 4 characters
within the string that are not repeated. 
The way I see this happening is with two loops pulling in the
relevant characters and then comparing them to each other. Moving
up the string one character at a time. 

*/

// Test cases
const testCase1 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
// first marker after character 5

const testCase2 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
// first marker after character 10

const fs = require("fs");

packet = fs.readFileSync("../2022/Day 6/input.txt", "utf8").split();

const uniqueCharacterCheck = (sequence) => {
  // We need to take the letter we're comparing out of the
  // sequence and compare it with what's left in the sequence?

  // Let's just try taking the first letter and comparing it to the rest of the sequence
  firstLetter = sequence[0];

  // use string.includes with the firstLetter as the search value and position [1] as the starting point.
  if (sequence.includes(firstLetter, 1)) {
    return false;
  } else if ()
  return true;
};

const packetStartMarker = (packet) => {
  // initialise required variables
  let sequence = "";

  // First loop to act as the head of the sequence
  for (let head = 4; head < packet.length; head++) {
    // Second loop to act as the tail of the sequence
    for (let tail = head - 4; tail < head; tail++) {
      sequence += packet[tail];
    }

    // Find the four different characters function should be in here.
    // N.B. The marker that we're looking for as the final answer is the
    // current position of the head when a unique sequence is found.
    if (uniqueCharacterCheck(sequence)) {
      console.log(`Start-of-packet marker detected at position ${head}`)
      break;
    } else console.log(`No start-of-packet marker has been detected`);

    sequence = "";
  }
};

packetStartMarker(testCase2);


/* 
So first off we have a sequence that only checks the first number against
the rest of the sequence. This won't work if the sequence has the same letter 
on the second and forth positions as is the case with testCase2 once the 
loop has run once. So we now need to add an extra section of code to deal with 
this 
*/