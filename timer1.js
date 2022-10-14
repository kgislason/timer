// 'use strict'

/**
 * Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
 *
 */

const secondsArgs = require("./js/secondsArgs");

/**
 * timerScheduleBeeps()
 *
 * Description: takes the sorted and filtered arguments (numbers in seconds) and scheduled them to sound a beep at each time in seconds from when the program is run. A message is also logged to the console.
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

/**
 * timerStart()
 *
 * Description: initiates the program by printing a message to the console and calling all other required functions: timerScheduleBeeps(), timerRunning() &
  timerFinished()
 */

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

// Initiate the timer by calling our timerStart() function:
timerStart(secondsArgs());
