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
type ColorConf = {
    fg?: string;
    bg?: string;
    style?: string;
};

export class ANSIColorFmt {
    log (output: string, args: [string | number], config: ColorConf) {
        args.forEach(arg => {
            if (typeof arg === 'string') {
                output.replace('%s', arg);
            } else if (typeof arg === 'number') {
                output.replace('%d', arg.toString());
            } else {
                throw new TypeError(
                    '\nCLASS NAME: `ANSIColorFormat`\n' +
                        'MEMBER FUNC: `log(args...)`\n' +
                        'CAUSE: An Argument passed to `log` was of an invalid type.' +
                        `INVALID ARGUMENT: ${arg}` +
                        `INVALID VALID: ${typeof arg}`
                );
            }
            console.log(arg);
        });
    }

    #addANSIColorCodesToString (fg: number, bg?: number | null, style?: number | null) {
        const openEsc = style ? `\x1b[${style};` : `\x1b[0;`;
        return bg ? `${openEsc}${fg};${bg}m` : `${openEsc}${fg}m`;
    }
}

