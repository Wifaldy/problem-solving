const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your input: ", (input) => {
  let arr = input
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let minimum = arr.slice(0, arr.length - 1).reduce((a, b) => a + b, 0);
  let maximum = arr.slice(1, arr.length).reduce((a, b) => a + b, 0);
  console.log(minimum);
  console.log(maximum);
  rl.close();
});
