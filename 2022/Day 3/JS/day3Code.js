testString = 'BccTFfTPTsffdDDqsq'

const fs = require("fs");

fs.readFile("../2022/Day 3/input.txt", "utf8", (err, data) => {
  if (err) throw err;
  dataToString = data.toString().split("\r\n");
  // console.log(dataToString);
  for (let rucksack = 0; rucksack < (dataToString.length)/2; rucksack++) {
    let compartment1 = []
    let compartment2 = []
  }
});

const itemTypes = () => {
  let compartment1 = []
  let compartment2 = []
  for (let i = 0; i < (testString.length); i++) {
    if (i <= (testString.length)/2) {
      compartment1.push(testString[i])
    } else {
      compartment2.push(testString[i])
    }
  }
  console.log(compartment2[1])
}

itemTypes()