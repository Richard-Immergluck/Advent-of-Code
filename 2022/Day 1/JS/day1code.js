// https://developer.mozilla.org/en-US/docs/Web/API/FileSystem
// https://nodejs.org/api/fs.html#file-system

const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;
  const regExp = '\n\n'
  const rawData = data.toString().split(regExp)
  const dataSplit = rawData.map((item) => item.split('\n'))
  const dataAsNum = dataSplit.map((item) => item.map((item) => parseInt(item)))
  var elfList= []
  for (let elf = 0; elf < dataAsNum.length; elf++) {
    var elfAndCalorie = {}
    const result = dataAsNum[elf].reduce((a, b) => a + b, 0)
    elfAndCalorie.id = elf + 1
    elfAndCalorie.calories = result
    elfList.push(elfAndCalorie)
  }
  const sortedElfList = elfList.sort((a, b) => b.calories - a.calories)

  // Part one answer
  console.log('The highest number of calories is ' + (firstElf = sortedElfList[0].calories) + ' and is being carried by elf ' + (firstElf = sortedElfList[0].id))

  // Part two answer
  console.log('The top three elves with the highest number of calories are ' + (firstElf = sortedElfList[0].id) + ', ' + (secondElf = sortedElfList[1].id) + ' and ' + (thirdElf = sortedElfList[2].id))
  console.log('Their combined calories are ' + ((sortedElfList[0].calories) + (sortedElfList[1].calories) + (sortedElfList[2].calories)))
});                                                                                                                        