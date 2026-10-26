//Raviv Itzhaki & Ammar Mansour

// a code that will check if a number is divided by 2, 3, or 5, and print by how much it is divided between them, if it is not divided by any of them, print 0. without using if statements

const num = 30;
// Check divisibility by 2, 3, and 5
let res2 = num % 2 === 0;
let res3 = num % 3 === 0;
let res5 = num % 5 === 0;
// Calculate the total divisibility count
res = Number(res2) + Number(res3) + Number(res5);
console.log(res);
