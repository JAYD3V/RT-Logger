/**
 * @format
 * @JAYD3V
 * @author Andrew J Chambers Jr | W3Dojo@gmail.com
 * @file "./source/main.ts"
 * @fileoverview Module's entry point. When the module is initiated, the program/app using
 * it will receive its first instructions from this file.
 * <!---------------------------------------------------------------------------------> */

import { validateControlArg } from './lib/control-seq-x16.js';

// const red = 'red';
// const blue = 'blue';
// const yellow = 'yellow';
// const yellowBright = 'yellow+';
// const foo = 'foo';
// const zero = 0;
// const one = 1;
// const two = 2;
// const three = 3;
// const four = 4;
// const five = 5;
// const six = 6;
// const seven = 7;
// const eight = 8;
// const nine = 9;
// const ten = 10;
// const thirtyFive = 35;
// const fortyFive = 45;
// const eightyFive = 55;
// const ninetyFive = 65;
// const oneHundredAndFive = 75;
// const oneHundredAndFifteen = 85;

let result = validateControlArg(1);

console.log('\n\nFINAL RESULT: ' + result);

