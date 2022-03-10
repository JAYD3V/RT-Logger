type ANSIEscCode = number;

interface ANSIEscCodes {
    // TEXT STYLES
    readonly textStyleDefault: ANSIEscCode;
    readonly textStyleBold: ANSIEscCode;
    readonly textStyleItalic: ANSIEscCode;
    readonly textStyleUnderline: ANSIEscCode;
    readonly textStyleColorInversion: ANSIEscCode;
    readonly textStyleHidden: ANSIEscCode;
    readonly textStyleStikeThrough: ANSIEscCode;

    // FOREGROUND COLORS
    readonly fgRed: ANSIEscCode;
    readonly fgGreen: ANSIEscCode;
    readonly fgYellow: ANSIEscCode;
    readonly fgBlue: ANSIEscCode;
    readonly fgMagenta: ANSIEscCode;
    readonly fgCyan: ANSIEscCode;
    readonly fgWhite: ANSIEscCode;
    readonly fgBlack: ANSIEscCode;
    readonly fgDefault: ANSIEscCode;

    // BRIGHT FOREGROUND COLORS
    readonly fgBrightRed: ANSIEscCode;
    readonly fgBrightGreen: ANSIEscCode;
    readonly fgBrightYellow: ANSIEscCode;
    readonly fgBrightBlue: ANSIEscCode;
    readonly fgBrightMagenta: ANSIEscCode;
    readonly fgBrightCyan: ANSIEscCode;
    readonly fgBrightWhite: ANSIEscCode;
    readonly fgBrightBlack: ANSIEscCode;

    // BACKGROUND COLORS
    readonly bgRed: ANSIEscCode;
    readonly bgGreen: ANSIEscCode;
    readonly bgYellow: ANSIEscCode;
    readonly bgBlue: ANSIEscCode;
    readonly bgMagenta: ANSIEscCode;
    readonly bgCyan: ANSIEscCode;
    readonly bgWhite: ANSIEscCode;
    readonly bgBlack: ANSIEscCode;
    readonly bgDefault: ANSIEscCode;

    // BRIGHT BACKGROUND COLORS
    readonly bgBrightBlack: ANSIEscCode;
    readonly bgBrightRed: ANSIEscCode;
    readonly bgBrightGreen: ANSIEscCode;
    readonly bgBrightYellow: ANSIEscCode;
    readonly bgBrightBlue: ANSIEscCode;
    readonly bgBrightMagenta: ANSIEscCode;
    readonly bgBrightCyan: ANSIEscCode;
    readonly bgBrightWhite: ANSIEscCode;
}

const ansiEscCodes: ANSIEscCodes = {
    // TEXT STYLE
    textStyleDefault: 0, // Common Aliases: Standard, Regular, None
    textStyleBold: 1,
    textStyleItalic: 3,
    textStyleUnderline: 4,
    textStyleColorInversion: 7,
    textStyleHidden: 8,
    textStyleStikeThrough: 9,

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
 * The **RefANSICodeByName** class converts color-names & style-names into ANSI Esc codes
 * so that color names & style names can be used in string form to apply the colors &
 * styles the reference to terminal output */
export class RefANSICodeByName {
    /**
     * ### Static Method
     *
     * _To reference a list of all valid arguments available to be passed to this method,
     * all colors supported by the ANSI color-standard, and shorthands that can be used
     * see README.md Sect-1.2_
     *
     *  `fgColor()` converts colors names into ANSI Escape codes. The color name passed
     * into fgColor must be an ANSI supported color. Each color ANSI supports coresponds
     * to two specific codes, one for formatting the background color of terminal output,
     * and the other for formatting the foreground color of terminal output. Obviously
     * `fgColor()` returns the code that coresponds to the terminal output's background
     * color. To get the ANSI code that coresponds to the terminal output's foreground
     * color, use `bgColor()`.
     *
     * @param colorName Takes an ANSI Supported colorname as an argument.
     * @returns ANSI-color-code
     **/
    static fgColor (colorName:string) {
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
     * ### Static Method
     *
     * _To reference a list of all valid arguments available to be passed to this method,
     * all colors supported by the ANSI color-standard, and shorthands that can be used
     * see README.md Sect-1.2_
     *
     * `bgColor()` converts colors names into ANSI Escape codes. The color name passed
     * into bgColor must be an ANSI supported color. Each color ANSI supports coresponds
     * to two specific codes, one for formatting the background color of terminal output,
     * and the other for formatting the foreground color of terminal output. Obviously
     * `bgColor()` returns the code that coresponds to the terminal output's background
     * color. To get the ANSI code that coresponds to the terminal output's foreground
     * color, use `fgColor()`.
     *
     * @param colorName Takes an ANSI Supported colorname as an argument.
     * @returns ANSI-color-code
     **/
    static bgColor (colorName: string) {
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
     * _To reference a list of all valid arguments available to be passed to this method,
     * all colors supported by the ANSI color-standard, and shorthands that can be used
     * see README.md Sect-1.2_
     *
     * `textStyle()` converts text-style names (_i.e._ italic, bold, etc) into the ANSI
     * escape-code that coresponds to the name passed in as an argument to textStyle.
     * Like the other two **`RefANSICodeByName`** functions, textStyle shouldn't be used
     * to directly format terminal output, but rather to create custom functions that
     * style terminalOutput.
     *
     * @param styleType String that references style by name (i.e. italic, bold, etc...)
     * @returns The ANSI Escape code that coresponds to the styles name passed in.
     *  */
    static textStyle (styleType:string) {
        switch (styleType.trim().toLowerCase()) {
            case '':
                return ansiEscCodes.textStyleDefault;
            case 'none':
                return ansiEscCodes.textStyleDefault;
            case 'bold':
                return ansiEscCodes.textStyleBold;
            case 'italic':
                return ansiEscCodes.textStyleItalic;
            case 'underline':
                return ansiEscCodes.textStyleUnderline;
            case 'invert':
                return ansiEscCodes.textStyleColorInversion;
            case 'hidden':
                return ansiEscCodes.textStyleHidden;
            case 'strikeThrough':
                return ansiEscCodes.textStyleStikeThrough;
            default:
                return ansiEscCodes.textStyleDefault;
        }
    }
}

