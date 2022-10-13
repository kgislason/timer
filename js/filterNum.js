/**
 * filterArr();
 *
 * Description: Takes in an array of arguments from the console (number representing seconds) and filters out any bad data, i.e. empty argument, negative values, strings and returns a new array with only valid numbers
 *
 * @param {array} array of arguments passed to the console
 * @returns {array} returns a new array that has been clened of data that is not valid
 */

const filterArr = function(array) {
  let output = [];
  if (array.length === 0) {
    throw Error("You must enter at least one argument - a number in seconds. Multiple arguments should be separated by a space, i.e. 1 2 3");
  }

  for (let time of array) {
    if (time < 0) {
      throw Error("Numbers must be equal or greater than 0 (no negative numbers).");
    } else if (isNaN(time)) {
      throw Error("Type Error: You must enter only numbers (in seconds).");
    } else if (time > 600) {
      throw Error("Please...we don't want to be here all day. Only numbers less than 600 (600 seconds === 10 minutes!!!).");
    } else {
      output.push(Number(time));
    }
  }
  return output;
};

module.exports = filterArr;