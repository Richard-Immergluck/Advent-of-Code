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

const itemTypes = () => {
  let compartment1 = []
  let compartment2 = []
  for (let item = 0; item < (testString.length); item++) {
    if (item <= (testString.length)/2) {
      compartment1.push(testString[item])
    } else {
      compartment2.push(testString[item])
    }
  }
  console.log(compartment1.length, 'vs', compartment2.length)

  // https://www.w3schools.com/jsref/jsref_indexof_array.asp
  for (let itemToCompare = 0; itemToCompare < compartment1.length; itemToCompare++) {
    if (compartment2.indexOf(compartment1[itemToCompare]) !== -1) {
      // console.log(compartment1[itemToCompare])
    }
  }
}

itemTypes()