//Raviv Itzhaki && Ammar Mansour

const fs = require("fs"); // Import Node.js core module
const path = require("path");

const dirPath = path.join(__dirname, "/files");
//let names = ["1.txt", "2.txt", "3.txt", "4.txt", "5.txt", "6.txt", "7.txt", "8.txt", "9.txt", "10.txt"];   - old code - write the txt files and array manually

// create 10 txt files with random number of lines and write them to the files
let names = [];
let letter = "a";
//loop of 10 times to create 10 files
for (let i = 0; i < 10; i++) {
  names.push(`${i + 1}.txt`);
  const testToFile = fs.writeFileSync(`${dirPath}/${i + 1}.txt`, "");
  let numOfLines = Math.floor(Math.random() * 12) + 1;
  //loop of random number of lines to write to the files
  for (let j = 0; j < numOfLines; j++) {
    if (j === numOfLines - 1) {
      fs.appendFileSync(`${dirPath}/${i + 1}.txt`, `${letter}${j + 1}`);
    } else {
      fs.appendFileSync(`${dirPath}/${i + 1}.txt`, `${letter}${j + 1}\n`);
    }
  }
  letter = String.fromCharCode(letter.charCodeAt(0) + 1);
}
const result = fs.writeFileSync(`${dirPath}/result.txt`, "");
// loop for reading the files
for (let i = 0; i < names.length; i++) {
  const textIn = fs.readFileSync(`${dirPath}/${names[i]}`, "utf-8");
  const arr = textIn.split(/\r?\n/);
  // loop for writing the lines to the result.txt file
  for (let j = 0; j < i + 1 && j < arr.length; j++) {
    console.table(arr[j]);
    fs.appendFileSync(`${dirPath}/result.txt`, `${arr[j]}\n`);
  }
}
