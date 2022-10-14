// 'use strict'

/**
 * Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
 *
 */

const secondsArgs = require("./js/secondsArgs");
const timerStart = require("./js/timerStart");

// Initiate the timer by calling our timerStart() function:
timerStart(secondsArgs);
