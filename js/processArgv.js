/**
 * getArgs()
 * 
 * Description: takes the arguments passed in the console using process.argv and filters out the first 2
 * 
 * @returns {array} array of user defined arguments passed via the console
 * 
 */
const getArgs = function() {
  return process.argv.slice(2);
};

module.exports = getArgs;