// 'use strict'

/**
 * Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
 *
 */
const seconds = require("./js/secondsArgs");
const timerStart = require("./js/timerStart");

// Initiate the timer
timerStart(seconds);
