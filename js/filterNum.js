/**
 * filterArr();
 *
 * Description: Takes in an array of arguments from the console (number representing seconds) and filters out any bad data, i.e. empty argument, negative values, strings and returns a new array with only valid numbers
 *
 * @param {array} array of arguments passed to the console
 * @returns {array} returns a new array that has been cleaned of data that is not valid
 */

const filterArr = function(array) {
  let output = [];
  if (array.length !== 0) {
    for (let time of array) {
      let negNum = time < 0;
      let notNum = isNaN(time);
      let tooBig = time > 600;

      if (!negNum && !notNum && !tooBig) {
        output.push(Number(time));
      }
    }
  }
  return output;
};

module.exports = filterArr;
