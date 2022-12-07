testString = 'BccTFfTPTsffdDDqsq'

const fs = require("fs");

fs.readFile("../2022/Day 3/input.txt", "utf8", (err, data) => {
  if (err) throw err;
  dataToString = data.toString().split("\r\n");
  // console.log(dataToString);
  for (let rucksack = 0; rucksack < dataToString.length; rucksack++) {
    let compartment1 = []
    let compartment2 = []
  }
});

const itemType = (string) => {
  let compartment1 = []
  let compartment2 = []

  // First split the string into two equal halves
  for (let item = 0; item < (string.length); item++) {
    if (item <= ((string.length / 2) - 1)) {
      compartment1.push(string[item])
    } else {
      compartment2.push(string[item])
    }
  }

  // Use indexOf to find the matching item
  // https://www.w3schools.com/jsref/jsref_indexof_array.asp
  for (let itemToCompare = 0; itemToCompare < compartment1.length; itemToCompare++) {
    if (compartment2.indexOf(compartment1[itemToCompare]) !== -1) {
      console.log(compartment1[itemToCompare])
    }
  }
}

itemType(testString)