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

class ANSIColorFmt {
    log (output: string, args: [string | number], config: ColorConf) {
        args.forEach(arg => {
            const argType = typeof arg;

            if (typeof arg === 'string') {
                output.replace('%s', arg);
            } else if (typeof arg === 'number') {
                output.replace('%d', arg.toString());
            } else {
                // Arguments must be of type number, or type string. A runtime error is
                // incurred when this member-fn's type requirements are not met.
                throw new TypeError(
                    '\nCLASS NAME: `ANSIColorFormat`\n' +
                        'MEMBER FUNC: `log(args...)`\n' +
                        'CAUSE: An Argument passed to `log` was of an invalid type.' +
                        `INVALID ARGUMENT: ${arg}` +
                        `INVALID TYPE: ${typeof arg}`
                );
            }

            console.log(arg);
        });
    }

    #clrFmtStr (fg: number, bg?: number | null, style?: number | null) {
        const openEsc = style ? `\x1b[${style};` : `\x1b[0;`;

        return bg ? `${openEsc}${fg};${bg}m` : `${openEsc}${fg}m`;
    }
}

const getANSICodeFrom = {
    colorName: (color: string): number => {
        switch (color) {
            case 'black':
                return 30;
            case 'red':
                return 31;
            case 'green':
                return 32;
            case 'yellow':
                return 33;
            case 'blue':
                return 34;
            case 'magenta':
                return 35;
            case 'cyan':
                return 36;
            case 'white':
                return 37;
            case 'brightBlack':
                return 40;
            case 'brightRed':
                return 41;
            case 'brightGreen':
                return 42;
            case 'brightYellow':
                return 43;
            case 'brightBlue':
                return 44;
            case 'brightMagenta':
                return 45;
            case 'brightCyan':
                return 46;
            case 'brightWhite':
                return 47;
            default:
                return 37;
        }
    },

    styleReference: (style: string): number => {
        switch (style) {
            case 'std':
                return 0;

            case 'standard':
                return 0;

            case 'b':
                return 1;

            case 'bold':
                return 1;

            case 'i':
                return 3;

            case 'italic':
                return 3;

            case 'u':
                return 4;

            case 'underline':
                return 4;

            case 'strikeThrough':
                return 9;

            case 'strike':
                return 9;

            default:
                return 0;
        }
    }
};
