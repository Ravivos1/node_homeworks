//Raviv Itzhaki && Ammar Mansour

const http = require("http");
const fs = require("fs"); // Import Node.js core module
const path = require("path");

const dirPath = path.join(__dirname, "/files");

//reading the users.json file and prepare result vars
let data = fs.readFileSync(__dirname + "/data/users.json" , "utf-8");
data = JSON.parse(data);
let count = 0;
let userNames = "";

//loop for counting the number of users and writing their names to a string
for (let i = 0; i < data.length; i++) {
  count++;
  userNames += data[i].name + "\n";
}

//writing the result to the files
fs.writeFileSync(`${dirPath}/user_count.txt`, `The number of users is: ${count}`);
fs.writeFileSync(`${dirPath}/user_names.txt`, `User Names:\n${userNames}`);