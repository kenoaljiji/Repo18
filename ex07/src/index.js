let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
let uniqueArray = [...new Set(numberArray)];
uniqueArray.sort((a, b) => {
  return a - b;
});
// Only change code below this line

// Only change code above this line
console.log(uniqueArray);
module.exports = { numberArray, uniqueArray };
