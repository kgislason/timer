/**
 * args
 *
 * Description: return user input using process.argv. [Read more](https://nodejs.org/docs/latest/api/process.html#processargv)
 *
 * @returns {array} array of user defined arguments passed via the console
 *
 */

// store user input arguments into a variable, removing the first 2 that are not relevant
const args = function() {
  return process.argv.slice(2);
};

module.exports = args;