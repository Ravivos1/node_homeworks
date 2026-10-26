//Raviv Itzhaki & Ammar Mansour

// a code that will check an array of numbers and check how many zeroes are in the array and print the number of zeroes in the array. without using if statements

const arr = [0, 1, 2, 0, 3, 0, 4, 5, 0];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  // Check if the current element is zero
  let isZero = arr[i] === 0;
  // Increment the count of zeroes if the current element is zero
  count += Number(isZero);
}
console.log(count);
