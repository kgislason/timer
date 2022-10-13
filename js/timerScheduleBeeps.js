/**
 * timerScheduleBeeps()
 * 
 * Description: takes the sorted and filtered arguemtns (numbers in seconds) and scheduled them to sound a beep at each time in seconds from when the program is run. A message is also logged to the console.
 */
const sortTimes = require('./sortTimes');

// schedule the beeps to run at the specified times
const timerScheduleBeeps = function() {
  let bt = sortTimes();
  // Loop through our times args
  for (let t of bt) {
    let tSec = t * 1000;
    setTimeout(() => {
      let second = "seconds";
      if (t === 1) {
        second = "second";
      }
      console.log(`Beep at ${t} ${second}`);
      process.stdout.write('\x07');
    }, tSec);
  }
};

module.exports = timerScheduleBeeps;