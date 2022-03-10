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
/**
 *
 * ### Function Generator
 *
 * Generates functions that format strings to print the specified color & weight. This
 * is a relatively simple function, and the functions it generates, can be generated to
 * format strings with 1 of 6 different colors.
 *   1. **Red** (ANSI: 31)
 *   2. **Green** (ANSI: 31)
 *   3. **Yellow** (ANSI: 31)
 *   4. **Blue** (ANSI: 31)
 *   5. **Magenta** (ANSI: 31)
 *   6. **Cyan** (ANSI: 31)
 *
 * @param ANSIColorCode
 * @param boldFg
 * @returns
 */
declare type ColorConf = {
    fg?: string;
    bg?: string;
    style?: string;
};
export declare class ANSIColorFmt {
    #private;
    log(output: string, args: [string | number], config: ColorConf): void;
}
export {};
//# sourceMappingURL=color-ansi.d.ts.map