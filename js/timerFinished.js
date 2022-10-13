/**
 * timerFinsihed()
 * 
 * Description: takes the filtered and sorted arguments (numbers in seconds) and determines the last scheduled beep. Prints a message to the console when the last beep has been sounded
 */
const sortTimes = require("./sortTimes");

// Indicate when the timer is finished
const timerFinished = function() {
  let bt = sortTimes();
  let endTime = (Number(bt[bt.length - 1]) + 1) * 1000;
  setTimeout(() => {
    console.log('Timer finished!');
  }, endTime);
};

module.exports = timerFinished;