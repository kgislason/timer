/**
 * timesToNum()
 * 
 * Description: Converts the arguments array from the console into numbers from strings and returns a new array of numbers
 */
const getArgs = require('./processArgv');

// Convert the arguments from strings (default) to numbers
const timesToNum = function() {
  let numArr = [];
  let args = getArgs();
  
  args.forEach((num) => {
    numArr.push(Number(num));
  });
  return numArr;
};

module.exports = timesToNum;