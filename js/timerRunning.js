/**
 * timerRunning()
 *
 * Description: prints dots to the console to indicate that the program is running. Each second a series of dots is printed to the console. The dots increase the longer the program runs
 */

// show indicator that time is running with dots logged to console
const timerRunning = function(array) {
  // start with an empty string:
  let dots = '';

  // Create a loop to adding anew dot to the dots string every second until the last beep is sounded:
  for (let i = 0; i < array[array.length - 1]; i++) {

    // Convert seconds to milliseconds:
    let countTimes = (i + 1) * 1000;

    // Schedule each dot to log to the console:
    setTimeout(() => {
      dots += '.';
      console.log(dots);
    }, countTimes);
  }
};

module.exports = timerRunning;