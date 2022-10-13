/**
 * filterTimes();
 * 
 * Description: Takes in an array of arguments from the console (number representing seconds) and filters out any bad data, i.e. empty argument, negative values, strings and returns a new array with only valid numbers
 */
const timesToNum = require('./timesToNum');

const filterTimes = function() {
  let beepTimes = timesToNum();
  let output = [];
  if (beepTimes.length === 0) {
    throw Error("You must enter at least one argument - a number in seconds. Multiple arguments should be separated by a space, i.e. 1 2 3");
  }

  for (let time of beepTimes) {
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

module.exports = filterTimes;