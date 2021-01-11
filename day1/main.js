const input = require('./input');
let newSet = new Set();

// part 1
const part1 = (target) => {
  for (let i = 0; i < input.length; i++) {
    let difference = target - input[i];
    if (newSet.has(difference)) {
      return input[i] * difference;
    }
  
    newSet.add(input[i]);
  }
}

// part 2
const part2 = (target) => {
  for (let i = 0; i < input.length; i++) {
    let difference = target - input[i];
    let result = part1(difference);
    if (result) {
      return result * input[i];
    }
  }
}

console.log("The answer for the first part is:", part1(2020))
console.log("The answer for the second part is:", part2(2020))