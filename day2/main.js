const rawinput = require('./input');
const input = rawinput.split('\n');

let counter1 = 0;
let counter2 = 0;

const checkOccurence = (noOfTimes, targetLetter, password) => {
  // constructing regex
  let re = new RegExp(`[^${targetLetter}]`, 'g');
  let length = password.replace(re, '').length;

  // if length is within the range, return true
  let range = noOfTimes.replace('-', ' ');
  range = range.split(' ');

  if (length >= parseInt(range[0]) && length <= parseInt(range[1])) {
    return true;
  }
  else {
    return false;
  }
}

const checkNewOccurence = (noOfTimes, targetLetter, password) => {
  let positions = noOfTimes.replace('-', ' ');
  let p1 = positions.split(' ')[0];
  let p2 = positions.split(' ')[1];
  // if first or second occurence contains then it is valid

  if ((password[p1-1] === targetLetter || password[p2-1] === targetLetter) && !(password[p1-1] === targetLetter && password[p2-1] === targetLetter)) {
    return true;
  }
  else {
    return false;
  }

  
}

const part1 = () => {
  for (let i = 1; i < input.length-1; i++) {
    let eachPassword = input[i].split(" ");
    let numberOfTimes = eachPassword[0];
    let letterCondition = eachPassword[1].replace(':', '');
    if (eachPassword[2].includes(letterCondition)) {
      // call the function over here to check the number of times
      let res = checkOccurence(numberOfTimes, letterCondition, eachPassword[2]);
      if (res) {
        counter1++;
      }
    }
  }
  return counter1;
}

const part2 = () => {
  for (let i = 1; i < input.length-1; i++) {
    let eachPassword = input[i].split(" ");
    let numberOfTimes = eachPassword[0];
    let letterCondition = eachPassword[1].replace(':', '');

    if (eachPassword[2].includes(letterCondition)) {
      let res = checkNewOccurence(numberOfTimes, letterCondition, eachPassword[2]);
      if (res) {
        counter2++;
      }

    }
  }
  return counter2;
}


console.log("The answer for part 1 is:", part1());
console.log("The answer for part 2 is:", part2());