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

const packetStartMarker = (packet) => {
  // initialise required variables
  let sequence = "";

  // First loop to act as the head of the sequence
  for (let head = 4; head < packet.length; head++) {
    // Second loop to act as the tail of the sequence
    for (let tail = head - 4; tail < head; tail++) {
      sequence += packet[tail]
    }
    
    // Find the four different characters function should be in here. 

    console.log(`updating sequence`, sequence)
    sequence = ""
  }
};

packetStartMarker(testCase1);
