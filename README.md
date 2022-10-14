# Timer

An alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

## Purpose

This project was created by me as part of my learnings at Lighthouse Labs.

## Usage

Install it:

`git clone git@github.com:kgislason/timer.git`
`cd timer`
`npm install`

Run timer:

* Each argument should be a number representing seconds
* Multiple arguments should be separated by a space
* Strings or negative numbers will be ignored.
* This timer has a max of 600 seconds (10 minutes).

`node timer1.js <arguments>`

`npm start <arguments>`

I.e. `node timer1.js 1 2 3 5 7 10`

## Documentation

The following functions are currently implemented:

*  `args()`: return user input using process.argv. [Read more](https://nodejs.org/docs/latest/api/process.html#processargv)
* `secondsArgs`: Applies functions `filterNum()`, `stringToNum()`, `sortNum()` to returned array from `args()`.
* `filterNum()`: Takes in an array of arguments from the console (number representing seconds) and filters out any bad data, i.e. empty argument, negative values, strings and returns a new array with only valid numbers.
* `stringToNum()`: Converts the arguments array from the console into numbers from strings and returns a new array of numbers.
* `sortNum()`: takes the args array with user defined arguments and sorts them from smallest to largest.
* `secondsArgs()`: Applies functions `filterNum()`, `stringToNum()`, `sortNum()` to `args` variable`. This function is then passed to the `timerStart()` function.
* `timerScheduleBeeps()`: takes the sorted and filtered arguments (numbers in seconds) and scheduled them to sound a beep at each time in seconds from when the program is run. A message is also logged to the console.
* `timerRunning()`:  prints dots to the console to indicate that the program is running. Each second a series of dots is printed to the console. The dots increase the longer the program runs.
* `timerFinished()`:  takes the filtered and sorted arguments (numbers in seconds) and determines the last scheduled beep. Prints a message to the console when the last beep has been sounded.
* `timerStart()`: initiates the program by printing a message to the console and calling all other required functions: `timerScheduleBeeps()`, `timerRunning()` & `timerFinished()`.
