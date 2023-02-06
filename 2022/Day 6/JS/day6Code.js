/* 

--- Day 6: Tuning Trouble ---

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

// Read in the input file
const fs = require("fs");
packet = fs.readFileSync("../2022/Day 6/input.txt", "utf8").split();

// Function to check for unique characters
const uniqueCharacterCheck = (sequence) => {
  // Initialise a boolean variable to store the result of the check
  // Assume the sequence is unique until proven otherwise
  let isUnique = true;

  // Loop through the sequence
  for (
    let comparisonIndex = 0;
    comparisonIndex < sequence.length;
    comparisonIndex++
  ) {
    // Store comparison letter in a variable
    let comparisonLetter = sequence[comparisonIndex];

    // Create the contents of the comparison string
    let comparisonString = ``;
    for (let stringIndex = 0; stringIndex < sequence.length; stringIndex++) {
      if (comparisonIndex === stringIndex) {
        continue;
      } else comparisonString += sequence[stringIndex];
    }

    // Check variables are correct
    // console.log(
    //   `The comparison letter is ${comparisonLetter} and the corresponding sequence is ${comparisonString}`
    // );

    // Now we need to check each of the 4 letters against the comparison letter.
    // If there is a match then this sequence cannot be the marker and therefor
    // we must break out of this loop and move the sequence one letter along.
    // If there is no match we need to keep going through each letter until we
    // get to the end of the loop.

    if (comparisonString.includes(comparisonLetter)) {
      isUnique = false;
      break;
    }
  }
  return isUnique;
};

const packetStartMarker = (packet) => {
  // initialise required variables
  let sequence = "";

  // Generate the sequence that will be sent to the uniqueCharacterCheck function
  // First loop to act as the head of the packet
  for (let head = 4; head < packet.length; head++) {

    // Second loop to act as the tail of the sequence
    for (let tail = head - 4; tail < head; tail++) {
      sequence += packet[tail];
    }

    // Function to check for unique characters
    // If it returns true, return the head position as the answer to Day 6 part 1
    if (uniqueCharacterCheck(sequence)) {
      console.log(`Start-of-packet marker detected at position ${head}`);
      return head;
    };

    // Reset the sequence variable for the next loop
    sequence = "";
  }
};

// Test cases
// if (packetStartMarker(testCase1) === 5) {
//   console.log(`Test case 1 passed`);
// }

// if (packetStartMarker(testCase2) === 10) {
//   console.log(`Test case 2 passed`);
// }

console.log(packetStartMarker(packet.toString()));



/* 
So first off we have a sequence that only checks the first number against
the rest of the sequence. This won't work if the sequence has the same letter 
on the second and forth positions as is the case with testCase2 once the 
loop has run once. The trick was in where I had written the return statement  
for the uniqueCharacterCheck function. It was inside the second loop and
therefore returning a false positive as soon as it found a match. Moving it
outside the loop was the fix.
*/
