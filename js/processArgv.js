/**
 * args
 *
 * Description: stores arguments passed in the console using process.argv and filters out the first 2
 *
 * @returns {array} array of user defined arguments passed via the console
 *
 */
const args = process.argv.slice(2);

module.exports = args;