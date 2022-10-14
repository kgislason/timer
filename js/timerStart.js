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
  // once the command is run to start the timer, log a message to the console:
  console.log("Timer starting...");

  // Schedule our beeps:
  timerScheduleBeeps(array);

  // Show indicator in console that the program is running:
  timerRunning(array);

  // Log another message to console when after the last beep:
  timerFinished(array);
};

module.exports = timerStart;