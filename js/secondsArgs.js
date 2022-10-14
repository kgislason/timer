/**
 * secondsArgs
 *
 * Process the console arguments by sorting min to max, filtering out bad input, and return only numbers array
 */

const stringToNum = require("./stringToNum");
const sortNum = require("./sortNum");
const filterNum = require("./filterNum");
const args = require("./processArgv");

const secondsArgs = sortNum(filterNum(stringToNum(args)));

module.exports = secondsArgs;