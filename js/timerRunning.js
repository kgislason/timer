/**
 * timerRunning()
 * 
 * Description: prints dots to the console to indicate that the program is running. Each second a series of dots is printed to the console. The dots increase the longer the program runs
 */
const sortTimes = require('./sortTimes');

// show indicator that time is running with dots logged to console
const timerRunning = function() {
  let bt = sortTimes();
  let dots = '';
  for (let i = 0; i < bt[bt.length - 1]; i++) {
    let countSeconds = (i + 1) * 1000;
    setTimeout(() => {
      dots += '.';
      console.log(dots);
    }, countSeconds);
  }
};

module.exports = timerRunning;