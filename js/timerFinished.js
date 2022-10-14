/**
 * timerFinsihed()
 *
 * Description: takes the filtered and sorted arguments (numbers in seconds) and determines the last scheduled beep. Prints a message to the console when the last beep has been sounded
 */

const timerFinished = function(array) {

  // Calculate when the timer should finish based on last second argument
  // Add one second and convert to milliseconds:
  let endTime = (Number(array[array.length - 1]) + 1) * 1000;

  // Schedule the messge to run 1 second after the last beep sounds:
  setTimeout(() => {
    console.log('Timer finished!');
  }, endTime);
};

module.exports = timerFinished;