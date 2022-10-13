/**
 * sortTimes()
 * 
 * Description: takes the args array with user defined arguments and sorts them from smallest to largest. filterTimes() runs first to filter out any bad arguments, so we are left with only numbers
 */
const filterTimes = require('./filterTimes');

// sort the times arguments from smallest to largest
const sortTimes = function() {
  let output = filterTimes().sort((a, b) => a - b);
  return output;
};

module.exports = sortTimes;