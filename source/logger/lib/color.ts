/** ***********************************************************************************
 * @file "${rootDir}/(source/module)/logger/lib/color.ts"
 * @fileoverview This file contains a library that colors console output by formatting
 * the strings that are logged in the console with ANSI escape sequences & color codes.
 *
 * @format
 * @license MIT
 * @author A J Chambers (W3Dojo@Gmail.com)
 * @JAYD3V
 * ******************************************************************************** */

import { format } from 'util';


type ColorCode = number;

type ColorCodes = {
    red: ColorCode,
    green: ColorCode,
    yellow: ColorCode,
    blue: ColorCode,
    magenta: ColorCode,
    cyan: ColorCode
}


export const code: ColorCodes = {
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36
};

export function clrStr (output: string, color:ColorCode) {
  if (color > 36 || color < 31) {
    throw new RangeError('Invalid color code.\nValid color codes range from 31 - 36');
  }

  console.log('\nTESTING 1... 2... 3... \n');
  console.log('OUTPUT = ' + output + '\n');
  console.log('COLOR CODE = ' + color + '\n');

  return format('\x1b[36m', output);
}
