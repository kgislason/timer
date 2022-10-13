/**
 * secondsArgs
 *
 * Process the console arguments and return only numbers array
 */

const stringToNum = require("./stringToNum");
const sortNum = require("./sortNum");
const filterNum = require("./filterNum");
const args = require("./processArgv");

const seconds = sortNum(filterNum(stringToNum(args)));

module.exports = seconds;