const rawinput = require('./input');
const input = rawinput.split('\n').slice(1, -1);

let seatID = 0;
let maxSeatID = 0;
let seatsArr = [];

const part1 = () => {
  for (let i = 0; i < input.length; i++) {

    let maxRow = 127;
    let minRow = 0;
    let maxCol = 7;
    let minCol = 0;
    let eachSeat = input[i].split("");
  
    while (eachSeat.length > 0) {
      // lower half
      if (eachSeat[0] === "F") {
        maxRow = Math.floor(maxRow - (maxRow-minRow)/2);
      }
      //upper half
      else if (eachSeat[0] === "B") {
        minRow = Math.ceil(maxRow -(maxRow-minRow)/2);
      }
      else if (eachSeat[0] === "L") {
        maxCol = Math.floor(maxCol - (maxCol-minCol)/2);
      }
      else {
        minCol = Math.ceil(maxCol -(maxCol-minCol)/2);
      }
      eachSeat.shift();
    }
  
    seatID = maxRow * 8 + maxCol;
    seatsArr.push(seatID);
    if (seatID > maxSeatID) {
      maxSeatID = seatID;
    }
  }
  return maxSeatID;
}

const part2 = () => {
  for (let i = 0; i < seatsArr.length; i++) {
    if (!seatsArr.includes(seatsArr[i]-1) && seatsArr.includes(seatsArr[i]-2)) {
      return (seatsArr[i]-1);
    }
  }
}

console.log("Highest seat ID: ", part1());
console.log("My seat ID: ", part2());