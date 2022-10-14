/**
 * stringToNum()
 *
 * Description: Converts the arguments array from the console into numbers from strings and returns a new array of numbers
 */

// Convert the arguments from strings (default) to numbers
const stringToNum = function(array) {
  let numArr = [];

  // Loop through user input arguments
  array.forEach((num) => {
    // Convert string to number and push to new array
    numArr.push(Number(num));
  });

  // return the new array of numbers
  return numArr;
};

module.exports = stringToNum;