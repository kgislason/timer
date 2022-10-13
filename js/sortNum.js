/**
 * sortNum()
 *
 * Description: takes the args array with user defined arguments and sorts them from smallest to largest.
 *
 * @param {array} array of numbers in seconds passed via the console
 */

const sortNum = function(array) {
  let output = array.sort((a, b) => a - b);
  return output;
};

module.exports = sortNum;