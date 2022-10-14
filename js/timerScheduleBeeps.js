/**
 * timerScheduleBeeps()
 *
 * Description: takes the sorted and filtered arguemtns (numbers in seconds) and scheduled them to sound a beep at each time in seconds from when the program is run. A message is also logged to the console.
 */

// schedule the beeps to run at the specified times
const timerScheduleBeeps = function(array) {
  // Loop through our time in seconds args `t`
  for (let t of array) {
    // convert to milliseconds
    let tSec = t * 1000;
    //schedule each beep
    setTimeout(() => {
      // handle singular/plural text: `1 second` vs `2 seconds`
      let second = "seconds";
      if (t === 1) {
        second = "second";
      }
      // log a message to the console along with beep
      console.log(`Beep at ${t} ${second}`);
      // make a beep sound
      process.stdout.write('\x07');
    }, tSec);
  }
};

module.exports = timerScheduleBeeps;