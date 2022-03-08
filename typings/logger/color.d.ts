/** ___________________________________________________________________________________
 * @format
 * @JAYD3V
 * @author A. Chambers -> W3Dojo@gmail.com
 * @file "${rootDir}/(source/module)/logger/lib/color.ts"
 * @fileoverview "This file contains a library that colors console output
 * by formatting the strings that are logged in the console with ANSI escape
 *  sequences & color codes."
 * @license MIT
 * -----------------------------------------------------------------------------------  */
export declare function genColorFn(ANSIColorCode: number, boldFg: boolean): (output: string) => string;
export declare const color: {
    red: (output: string) => string;
    greenBold: (output: string) => string;
    yellow: (output: string) => string;
    blue: (output: string) => string;
    magenta: (output: string) => string;
    cyan: (output: string) => string;
};
export declare const boldColor: {
    red: (output: string) => string;
    greenBold: (output: string) => string;
    yellow: (output: string) => string;
    blue: (output: string) => string;
    magenta: (output: string) => string;
    cyan: (output: string) => string;
};
//# sourceMappingURL=color.d.ts.map