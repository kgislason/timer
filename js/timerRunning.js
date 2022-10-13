/**
 * timerRunning()
 *
 * Description: prints dots to the console to indicate that the program is running. Each second a series of dots is printed to the console. The dots increase the longer the program runs
 */

// show indicator that time is running with dots logged to console
const timerRunning = function(array) {
  let dots = '';
  for (let i = 0; i < array[array.length - 1]; i++) {
    let countTimes = (i + 1) * 1000;
    setTimeout(() => {
      dots += '.';
      console.log(dots);
    }, countTimes);
  }
};

module.exports = timerRunning;