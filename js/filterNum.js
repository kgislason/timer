/**
 * filterArr();
 *
 * Description: Takes in an array of arguments from the console (number representing seconds) and filters out any bad data, i.e. empty argument, negative values, strings and returns a new array with only valid numbers
 *
 * @param {array} array of arguments passed to the console
 * @returns {array} returns a new array that has been clened of data that is not valid
 */

const filterArr = function(array) {

  // Create the output array
  let output = [];

  // Check if array is empty
  if (array.length !== 0) {

    // Loop through the array
    for (let time of array) {

      // identify cases we don't want to include in our timer

      // No negative numbers
      let negNum = time < 0;

      // No strings, other data types
      let notNum = isNaN(time);

      // No huge numbers
      let tooBig = time > 600;

      // push only valid numbers to our new array
      if (!negNum && !notNum && !tooBig) {
        output.push(Number(time));
      }
    }
  }
  return output;
};

module.exports = filterArr;