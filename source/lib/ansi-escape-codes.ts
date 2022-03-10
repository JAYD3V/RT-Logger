const ansiEscCodes = {
    // TEXT STYLE
    textStyleDefault: 0, // Common Aliases: Standard, Regular, None
    textStyleBold: 1,
    textStyleItalic: 3,
    textStyleUnderline: 4,
    textStyleInversion: 7,
    textStyleHidden: 8,
    textStyleStrikeThrough: 9,

    // FOREGROUND COLORS
    fgBlack: 30,
    fgRed: 31,
    fgGreen: 32,
    fgYellow: 33,
    fgBlue: 34,
    fgMagenta: 35,
    fgCyan: 36,
    fgWhite: 37,
    fgDefault: 39, // ALIAS: Reset, None

    // BRIGHT FOREGROUND COLORS
    fgBrightBlack: 90,
    fgBrightRed: 91,
    fgBrightGreen: 92,
    fgBrightYellow: 93,
    fgBrightBlue: 94,
    fgBrightMagenta: 95,
    fgBrightCyan: 96,
    fgBrightWhite: 97,

    // BACKGROUND COLORS
    bgBlack: 40,
    bgRed: 41,
    bgGreen: 42,
    bgYellow: 43,
    bgBlue: 44,
    bgMagenta: 45,
    bgCyan: 46,
    bgWhite: 47,
    bgDefault: 49, // ALIAS: Reset, None

    // BRIGHT BACKGROUND COLORS
    bgBrightBlack: 100,
    bgBrightRed: 101,
    bgBrightGreen: 102,
    bgBrightYellow: 103,
    bgBrightBlue: 104,
    bgBrightMagenta: 105,
    bgBrightCyan: 106,
    bgBrightWhite: 107
};

/**
 * The purpose of **ANSICodeByName** is to covert string references into ANSI Escape
 * codes. For example, if a person wanted to use the code for coloring a FG blue, they
 * would simple use the static method `ANSICodeByName.fgCode('blue')`, which would return
 * the numeric value 34, which is the ANSI Escape code for a blue foreground. The same
 * can be done for styles `textStyleCode(...)` & `bgCode(...)`.
 * */
class ANSICodeByName {
    /**
     * #### Static Method
     *
     * This method coverts color-names into numeric ANSI Escape Codes for
     * setting the foreground color of text in a terminals output. This
     * method only return escape codes for colors that the ANSI standard
     * supports. All ANSI Supported colors have been listed below. Single
     * character values after the word 'or' are shorthands that can be used
     * for the adjacent color.
     *
     * ##### PLEASE NOTE: The ANSI Escape codes for bg & fg colors are not the same. For example. 34 is the esc code for blue, but if you try to use it for setting the bg color of a terminals output, it won't work. For setting the bg color blue, `44` is needed.
     *
     * - 'black' or 'k'
     * - 'red' or 'r'
     * - 'green' or 'g'
     * - 'yellow' or 'y'
     * - 'blue' or 'b'
     * - 'magenta' or 'm'
     * - 'white' or 'w'
     * - 'brightBlack' or 'k+'
     * - 'brightRed' or 'r+'
     * - 'brightGreen' or 'g+'
     * - 'brightYellow' or 'y+'
     * - 'brightBlue' or 'b+'
     * - 'brightMagenta' or 'm+'
     * - 'brightWhite' or 'w+'
     *
     * @param colorName The name of a valid color listed above.
     * @returns the ANSI Escape code that coresponds to the color's name passed into `colorName`.
     **/
    static fgCode (colorName:string) {
        switch (colorName.toLowerCase().trim()) {
            case 'red':
                return ansiEscCodes.fgRed;
            case 'r':
                return ansiEscCodes.fgRed;
            case 'brightRed':
                return ansiEscCodes.fgBrightRed;
            case 'r+':
                return ansiEscCodes.fgBrightRed;

            case 'green':
                return ansiEscCodes.fgGreen;
            case 'g':
                return ansiEscCodes.fgGreen;
            case 'brightGreen':
                return ansiEscCodes.fgBrightGreen;
            case 'g+':
                return ansiEscCodes.fgBrightGreen;

            case 'yellow':
                return ansiEscCodes.fgYellow;
            case 'y':
                return ansiEscCodes.fgYellow;
            case 'brightYellow':
                return ansiEscCodes.fgBrightYellow;
            case 'y+':
                return ansiEscCodes.fgBrightYellow;

            case 'blue':
                return ansiEscCodes.fgBlue;
            case 'b':
                return ansiEscCodes.fgBlue;
            case 'brightBlue':
                return ansiEscCodes.fgBrightBlue;
            case 'b+':
                return ansiEscCodes.fgBrightBlue;

            case 'magenta':
                return ansiEscCodes.fgMagenta;
            case 'm':
                return ansiEscCodes.fgMagenta;
            case 'brightMagenta':
                return ansiEscCodes.fgBrightMagenta;
            case 'm+':
                return ansiEscCodes.fgBrightMagenta;

            case 'cyan':
                return ansiEscCodes.fgCyan;
            case 'c':
                return ansiEscCodes.fgCyan;
            case 'brightCyan':
                return ansiEscCodes.fgBrightCyan;
            case 'c+':
                return ansiEscCodes.fgBrightCyan;

            case 'black':
                return ansiEscCodes.fgBlack;
            case 'k':
                return ansiEscCodes.fgBlack;
            case 'brightBlack':
                return ansiEscCodes.fgBrightBlack;
            case 'k+':
                return ansiEscCodes.fgBrightBlack;

            case 'white':
                return ansiEscCodes.fgWhite;
            case 'w':
                return ansiEscCodes.fgWhite;
            case 'brightWhite':
                return ansiEscCodes.fgBrightWhite;
            case 'w+':
                return ansiEscCodes.fgBrightWhite;

            default:
                return ansiEscCodes.fgWhite;
        }
    }

    /**
     * #### Static Method
     *
     * This method coverts color-names into numeric ANSI Escape Codes for
     * setting the background color of text in a terminals output. This
     * method only return escape codes for colors that the ANSI standard
     * supports. All ANSI Supported colors have been listed below. Single
     * character values after the word 'or' are shorthands that can be used
     * for the adjacent color.
     *
     *
     * ##### PLEASE NOTE: ANSI Escape codes for bg-colors are different than the escape codes for fg-colors, for example: `bgCode('blue')` returns `44`, while as; `fgCode(colorName)` returns 34.
     *
     * - 'black' or 'k'
     * - 'red' or 'r'
     * - 'green' or 'g'
     * - 'yellow' or 'y'
     * - 'blue' or 'b'
     * - 'magenta' or 'm'
     * - 'white' or 'w'
     * - 'brightBlack' or 'k+'
     * - 'brightRed' or 'r+'
     * - 'brightGreen' or 'g+'
     * - 'brightYellow' or 'y+'
     * - 'brightBlue' or 'b+'
     * - 'brightMagenta' or 'm+'
     * - 'brightWhite' or 'w+'
     *
     * @param colorName The name of a valid color listed above.
     * @returns the ANSI Escape code that coresponds to the color's name passed into `colorName`.
     **/
    static bgCode (colorName: string) {
        switch (colorName.toLowerCase().trim()) {
            case 'red':
                return ansiEscCodes.bgRed;
            case 'r':
                return ansiEscCodes.bgRed;
            case 'brightRed':
                return ansiEscCodes.bgBrightRed;
            case 'r+':
                return ansiEscCodes.bgBrightRed;

            case 'green':
                return ansiEscCodes.bgGreen;
            case 'g':
                return ansiEscCodes.bgGreen;
            case 'brightGreen':
                return ansiEscCodes.bgBrightGreen;
            case 'g+':
                return ansiEscCodes.bgBrightGreen;

            case 'yellow':
                return ansiEscCodes.bgYellow;
            case 'y':
                return ansiEscCodes.bgYellow;
            case 'brightYellow':
                return ansiEscCodes.bgBrightYellow;
            case 'y+':
                return ansiEscCodes.bgBrightYellow;

            case 'blue':
                return ansiEscCodes.bgBlue;
            case 'b':
                return ansiEscCodes.bgBlue;
            case 'brightBlue':
                return ansiEscCodes.bgBrightBlue;
            case 'b+':
                return ansiEscCodes.bgBrightBlue;

            case 'magenta':
                return ansiEscCodes.bgMagenta;
            case 'm':
                return ansiEscCodes.bgMagenta;
            case 'brightMagenta':
                return ansiEscCodes.bgBrightMagenta;
            case 'm+':
                return ansiEscCodes.bgBrightMagenta;

            case 'cyan':
                return ansiEscCodes.bgCyan;
            case 'c':
                return ansiEscCodes.bgCyan;
            case 'brightCyan':
                return ansiEscCodes.bgBrightCyan;
            case 'c+':
                return ansiEscCodes.bgBrightCyan;

            case 'black':
                return ansiEscCodes.bgBlack;
            case 'k':
                return ansiEscCodes.bgBlack;
            case 'brightBlack':
                return ansiEscCodes.bgBrightBlack;
            case 'k+':
                return ansiEscCodes.bgBrightBlack;

            case 'white':
                return ansiEscCodes.bgWhite;
            case 'w':
                return ansiEscCodes.bgWhite;
            case 'brightWhite':
                return ansiEscCodes.bgBrightWhite;
            case 'w+':
                return ansiEscCodes.bgBrightWhite;
            default:
                return ansiEscCodes.bgWhite;
        }
    }

    /**
     * This method coverts style-types into numeric ANSI Escape Codes.
     * There are a limited number of valid arguments accepted. If an
     * argument isn't valid the default ANSI code for styling is returned,
     * which is `0`. A value of 0 is equal to 'No Style. Valid arguments
     * are as follows...
     *
     * - 'bold' or 'b'
     * - 'italic' or 'i',
     * - 'underline' or 'u',
     * - 'strikethrough'or 's',
     * - 'invert',
     * - 'hidden',
     *
     * ##### The single character values above are shorthands, for example: the value 'b' will return the same number as 'bold' does.
     *
     * @param styleType A valid, ANSI Supported, style-type
     * @returns ANSI Escape code that coresponds to the styleType passed into the styleType parameter
     *  */
    static textStyleCode (styleType:string) {
        switch (styleType.trim().toLowerCase()) {
            case '':
                return ansiEscCodes.textStyleDefault;
            case 'none':
                return ansiEscCodes.textStyleDefault;
            case 'bold':
                return ansiEscCodes.textStyleBold;
            case 'b':
                return ansiEscCodes.textStyleBold;
            case 'italic':
                return ansiEscCodes.textStyleItalic;
            case 'i':
                return ansiEscCodes.textStyleItalic;
            case 'underline':
                return ansiEscCodes.textStyleUnderline;
            case 'u':
                return ansiEscCodes.textStyleUnderline;
            case 'invert':
                return ansiEscCodes.textStyleInversion;
            case 'hidden':
                return ansiEscCodes.textStyleHidden;
            case 'strikethrough':
                return ansiEscCodes.textStyleStrikeThrough;
            case 's':
                return ansiEscCodes.textStyleStrikeThrough;
            default:
                return ansiEscCodes.textStyleDefault;
        }
    }
}

export default ANSICodeByName;
