/**
 * stringToNum()
 *
 * Description: Converts the arguments array from the console into numbers from strings and returns a new array of numbers
 */

// Convert the arguments from strings (default) to numbers
const stringToNum = function(array) {
  let numArr = [];
  
  array.forEach((num) => {
    numArr.push(Number(num));
  });
  return numArr;
};

module.exports = stringToNum;