const rawinput = require('./input');

const input = rawinput.split('\n\n');

let counter1 = 0;
let counter2 = 0;

const part1 = () => {
  for (let i = 0; i < input.length; i++) {
    let eachEntry = input[i];
    // if less than 7 colon means not all fields are there
    if (eachEntry.match(/:/g).length < 7) {
      continue;
    }

    else if (eachEntry.match(/:/g).length === 7) {
      // if it includes cid means its wrong because cid its optional thus 7-1 == 6
      if (eachEntry.includes("cid")) {
        continue;
      }
      else {
        counter1++;
      }
    }
    else {
      counter1++;
    }
  }
  return counter1;
}

const checkDataValidity = (entry) => {
  entry = entry.replace(/\n/g, ' ');
  entry = entry.split(' ');
  let validCounter = 0;
  for (let i = 0; i < entry.length; i++) {
    let category = entry[i].substring(0, 3);
    let data = entry[i].substring(4);

    if (category === "hcl") {
      if (data.match(/^#[0-9a-f]{6}$/g)) {
        validCounter++;
      }
    }
    else if (category === "iyr") {
      if (data.match(/^(201[0-9]|2020)$/g)) {
        validCounter++;
      }
    }
    else if (category === "hgt") {
      if (data.match(/^((1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in)$/g)) {
        validCounter++;
      }
    }
    else if (category === "pid") {
      if (data.match(/^\d{9}$/g)) {
        validCounter++;
      }
    }
    else if (category === "ecl") {
      if (data.match(/^amb|blu|brn|gry|grn|hzl|oth$/g)) {
        validCounter++;
      }
    }
    else if (category === "byr") {
      if (data.match(/^(19[2-9][0-9]|200[0-2])$/g)) {
        validCounter++;
      }
    }
    else {
      if (data.match(/^(202[0-9]|2030)$/g)) {
        validCounter++;
      }
    }
  }

  // if more than 6 entries valid then means its valid (either 7/8 because cid is optional)
  if (validCounter > 6) {
    return true;
  }
  else {
    return false;
  }
}

const part2 = () => {
  // same but there's condition for the thing
  for (let i = 0; i < input.length; i++) {
    // for every item we check the fields????
    let eachEntry = input[i];
    // if less than 7 colon means not all fields are there
    if (eachEntry.match(/:/g).length < 7) {
      continue;
    }
    
    else if (eachEntry.match(/:/g).length === 7) {
      if (eachEntry.includes("cid")) {
        continue;
      }
      else {
        if (checkDataValidity(eachEntry)) {
          counter2++;
        }
      }
    }
    else {
      if (checkDataValidity(eachEntry)) {
        counter2++;
      }
    }

  }
  return counter2;
}

console.log("Total: ", part1())
console.log("Total: ", part2())