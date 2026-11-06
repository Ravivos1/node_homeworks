//Raviv Itzhaki && Ammar Mansour

const fs = require("fs"); // Import Node.js core module
const path = require("path");

const dirPath = path.join(__dirname, "/files");

// create 3 txt files with random number of lines and write them to the files
let names = [];
let letter = "a";
//loop of 3 times to create 3 files
for (let i = 1; i <= 3; i++) {
  names.push(`${i}.txt`);
  const testToFile = fs.writeFileSync(`${dirPath}/${i}.txt`, "");
  let numOfLines = Math.floor(Math.random() * 25) + 1;
  let stringToWrite = "";
  //loop of random number of lines to write the String and then write the file
  for (let j = 0; j < numOfLines; j++) {
    if (j === numOfLines - 1) {
      stringToWrite += `${letter}${j + 1}`;
    } else {
      stringToWrite += `${letter}${j + 1}\n`;
    }
  }
  fs.writeFileSync(`${dirPath}/${i}.txt`, stringToWrite);
  letter = String.fromCharCode(letter.charCodeAt(0) + 1);
}
const result = fs.writeFileSync(`${dirPath}/result.txt`, "");
// loop for reading the files and adds them to an array of arrays, each array contains the lines of the file
let arrFiles = [];
for (let i = 0; i < names.length; i++) {
  const textIn = fs.readFileSync(`${dirPath}/${names[i]}`, "utf-8");
  arrFiles.push(textIn.split(/\r?\n/));
}
console.log(arrFiles);
//loop for writing the result.txt file with the lines of the files in the order of the first line of each file, then two lines of each file, then three lines of each file, etc. until all the lines of the files are written to the result.txt file
let linesToPrint = 1;
let indexToPrint = 0;
let stringToRes = "";
const maxLines = Math.max(...arrFiles.map((file) => file.length));
const numberOfTimesToLoop = (maxLines * (maxLines + 1)) / 2; // sum of the first n natural numbers
for (let loop = 0; loop < numberOfTimesToLoop; loop++) {
  for (let i = 0; i < arrFiles.length; i++) {
    for (let j = 0; j < linesToPrint; j++) {
      if (indexToPrint + j < arrFiles[i].length) {
        stringToRes += `${arrFiles[i][indexToPrint + j]}\n`;
      }
    }
  }
  indexToPrint += linesToPrint;
  linesToPrint++;
}
fs.writeFileSync(`${dirPath}/result.txt`, stringToRes);