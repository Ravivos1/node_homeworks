// Raviv Itzhaki & Ammar Mansour

//a code that will print all the primary numbers between 1 to less than 237

// Loop through numbers from 2 to 236
for (let i = 2; i < 237; i++) {
  let isPrime = true;
  // Check if the number is prime
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
