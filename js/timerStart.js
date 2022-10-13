/**
 * timerStart()
 *
 * Description: initiates the program by printing a message to the console and calling all other required functions: timerScheduleBeeps(), timerRunning() &
  timerFinished()
 */
const timerScheduleBeeps = require("./timerScheduleBeeps");
const timerRunning = require("./timerRunning");
const timerFinished = require("./timerFinished");

const timerStart = function(array) {
  console.log("Timer starting...");
  timerScheduleBeeps(array);
  timerRunning(array);
  timerFinished(array);
};

module.exports = timerStart;