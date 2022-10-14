/**
 * args
 *
 * Description: stores arguments passed in the console using process.argv and filters out the first 2
 *
 * @returns {array} array of user defined arguments passed via the console
 *
 */

// store user input arguments into a variable, removing the first 2 that are not relevant
const args = process.argv.slice(2);

module.exports = args;