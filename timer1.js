'use strict'

/**
 * Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
 * 
 * Exmaple usage node timer1.js 10 3 5 15 9 
 * 
 */

// Get the arguments from the console, 
// I.e. node timer1.js 10 3 5 15 9
// args would be ["10", "3", "5", "15", "9"]
let args = process.argv.slice(2);

// Convert the arguments from strings (default) to numbers
const timesToNum = function() {
  let numArr = [];
  
  args.forEach((num) => {
    numArr.push(Number(num));
  });

  return numArr;
};

const filterTimes = function() {
  let beepTimes = timesToNum();
  let output = [];
  if (beepTimes.length === 0) return
  for (let time of beepTimes) {
    if (time < 0) {
      throw console.error("Times must not be negative numbers")
    } else if (isNaN(time)) {
      throw console.error("You must provide a number in seconds")
    } else if (time > 1200) {
      throw console.error("Please...we don't want to be here all day. Only numbers less than 1200 (20 minutes!!!)");
    } else {
      output.push(time);
    }
  }
  return output;
}

// sort the times arguments from smallest to largest
const sortTimes = function() {
  let output = filterTimes();
  // Sort args from smallest to largest
  return output.sort();
};


// show indicator that time is running with dots logged to console
const timerRunning = function() {
  let beepTimes = sortTimes();
  let dots = '.';
  for (let i = 0; i < beepTimes[beepTimes.length - 1]; i++) {
    let countSeconds = (i + 1) * 1000;
    setTimeout(() => {
      dots += '.';
      console.log(dots);
    }, countSeconds);
  }
};

// Indicate when the timer is finished
const timerFinished = function() {
  let beepTimes = sortTimes();
  let endTime = (Number(beepTimes[beepTimes.length - 1]) + 1) * 1000;
  setTimeout(() => {
    console.log('Timer finished!');
  }, endTime);
};

// schedule the beeps to run at the specified times
const timerScheduleBeeps = function() {
  let beepTimes = sortTimes();
  if (beepTimes.length === 0) {
    throw console.error("You must enter at least one number in seconds as an argument.");
  }
  console.log("Timer starting...");
  // Loop through our times args
  for (let time of beepTimes) {
    if (!isNaN(time) || time >= "0") {
      let timeInSeconds = time * 1000;
      setTimeout(() => {
        let second = "seconds";
        if (time === "1") {
          second = "second";
        }
        console.log(`Beep at ${time} ${second}`);
        process.stdout.write('\x07');
      }, timeInSeconds);
    }
  }
};

// Call our functions
timerScheduleBeeps();
timerRunning();
timerFinished();