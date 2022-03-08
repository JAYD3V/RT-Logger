/** ***********************************************************************************
 * @file "${rootDir}/(source/module)/logger/lib/color.ts"
 * @fileoverview This file contains a library that colors console output by formatting
 * the strings that are logged in the console with ANSI escape sequences & color codes.
 *
 * @format
 * @license MIT
 * @author A J Chambers(W3Dojo@Gmail.com)
 * @JAYD3V
 * ******************************************************************************** */
declare type ColorCode = number;
declare type ColorCodes = {
    red: ColorCode;
    green: ColorCode;
    yellow: ColorCode;
    blue: ColorCode;
    magenta: ColorCode;
    cyan: ColorCode;
};
export declare const code: ColorCodes;
export declare function clrStr(output: string, color: ColorCode): string;
export {};
//# sourceMappingURL=color.d.ts.map