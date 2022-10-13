/**
 * timerFinsihed()
 *
 * Description: takes the filtered and sorted arguments (numbers in seconds) and determines the last scheduled beep. Prints a message to the console when the last beep has been sounded
 */

const timerFinished = function(array) {
  let endTime = (Number(array[array.length - 1]) + 1) * 1000;
  setTimeout(() => {
    console.log('Timer finished!');
  }, endTime);
};

module.exports = timerFinished;