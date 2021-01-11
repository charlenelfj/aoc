const rawinput = require('./input');

let input = rawinput.split('\n');

let reducer = (allRules, line) => {
  // get the front colour
  let colour = line.match(/.+?(?=contain)/g)[0];
  colour = colour.replace(/bags|bag/g, '').trim();

  // get the back colour
  let otherColours = line.match(/contain (.*)/)[1];
  otherColours = otherColours.split(', ');

  allRules[colour] = new Set();

  otherColours.forEach((col) => {
    // remove formatting
  
    col = col.replace(/[0-9.]/g, '');
    col = col.replace(/bags|bag/g, '');
    col = col.trim();

    if (col !== "no other bags") {
      allRules[colour].add(col);
    } 
  })

  return allRules;
}

const part1 = () => {
  let test = input.reduce(reducer, {});
  console.log(test);
  

  const expand = (bag) => {
    console.log(bag)
    const colors = [...test[bag].values()];

    for (const color of test[bag].values()) {
      colors.push(...expand(color));
    }

    return colors;
  };

  return Object
    .keys(test)
    .filter((key) => {
      if (key !== "no other") {
        expand(key).includes('shiny gold')
      }
    })
    .length;
}


console.log(part1())