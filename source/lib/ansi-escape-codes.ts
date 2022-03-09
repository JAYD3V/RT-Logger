// DO NOT ALTER/CHANGE THE `ANSIEscapeCodes` OBJECT OR ANY OF ITS KEYS &/or VALUES
// THIS FILE SHOULD BE A READ ONLY ENTITY

type ANSIEscCode = number;

interface ANSIEscapeCodes {
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

const ansiEscCodes: ANSIEscapeCodes = {
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

export class ANSIEscapeCode {
    /**
     * This function converts the name of a color (so long as the color is supported by
     * the ANSI color standard) into the ANSI Color code for the colors name being passed
     * into colorName. For a list of the correct semantics to use, and all colors that are
     * supported, when using this function-member @see *The markdown table below*. To find
     * a more complete documentation source @see ***README.md***.
     *
     * @static
     * @param colorName Takes the name of a color. Be sure that the semantics are correct
     * when passing a colors name into this parameter. Shorthand's are supported @see the
     * Table below, or README.md
     * @returns The ANSI Color code that coresponds to the color passed into parameter
     * `colorName`.
     *
     * ##### Note: The bright color names & the shorthands are the same as the standard
     * color names & shorthands, except that the bright colors have an exclamation mark
     * `!` prepended to the end of them.
     *
     * |  Output Color  | Argument        | Short | ANSI |
     * | -------------: | --------------: | :---: | :--- |
     * |  Black         | &nbsp; black    |  b    |  30  |
     * |  Red           | &nbsp; red      |  r    |  31  |
     * |  Green         | &nbsp; green    |  g    |  32  |
     * |  Yellow        | &nbsp; yellow   |  y    |  33  |
     * |  Blue          | &nbsp; blue     |  b    |  34  |
     * |  Purple        | &nbsp; purple   |  p    |  35  |
     * |  Cyan          | &nbsp; cyan     |  c    |  36  |
     * |  White         | &nbsp; white    |  w    |  37  |
     * |  Bright Black  | &nbsp; black!   |  b!   |  40  |
     * |  Bright Red    | &nbsp; red!     |  r!   |  41  |
     * |  Bright Green  | &nbsp; green!   |  g!   |  42  |
     * |  Bright Yellow | &nbsp; yellow!  |  y!   |  43  |
     * |  Bright Blue   | &nbsp; blue!    |  b!   |  44  |
     * |  Bright Purple | &nbsp; purple!  |  p!   |  45  |
     * |  Bright Cyan   | &nbsp; cyan!    |  c!   |  46  |
     * |  Bright White  | &nbsp; white!   |  w!   |  47  |
     *
     * @returns ANSIEscCode */
    static fgColor (colorName:string) {
        switch (colorName.toLowerCase().trim()) {
            case 'red':
                return ansiEscCodes.fgRed;
            case '*red':
                return ansiEscCodes.fgBrightRed;
            case 'green':
                return ansiEscCodes.fgGreen;
            case '*green':
                return ansiEscCodes.fgBrightGreen;
            case 'yellow':
                return ansiEscCodes.fgYellow;
            case '*yellow':
                return ansiEscCodes.fgBrightYellow;
            case 'blue':
                return ansiEscCodes.fgBlue;
            case '*blue':
                return ansiEscCodes.fgBrightBlue;
            case 'magenta':
                return ansiEscCodes.fgMagenta;
            case '*magenta':
                return ansiEscCodes.fgBrightMagenta;
            case 'cyan':
                return ansiEscCodes.fgCyan;
            case '*cyan':
                return ansiEscCodes.fgBrightCyan;
            case 'black':
                return ansiEscCodes.fgBlack;
            case '*black':
                return ansiEscCodes.fgBrightBlack;
            case 'white':
                return ansiEscCodes.fgWhite;
            case '*white':
                return ansiEscCodes.fgBrightWhite;
            default:
                return ansiEscCodes.fgWhite;
        }
    }

    static bgColor (colorName: string) {
        switch (colorName.toLowerCase().trim()) {
            case 'red':
                return ansiEscCodes.bgRed;
            case '*red':
                return ansiEscCodes.bgBrightRed;
            case 'green':
                return ansiEscCodes.bgGreen;
            case '*green':
                return ansiEscCodes.bgBrightGreen;
            case 'yellow':
                return ansiEscCodes.bgYellow;
            case '*yellow':
                return ansiEscCodes.bgBrightYellow;
            case 'blue':
                return ansiEscCodes.bgBlue;
            case '*blue':
                return ansiEscCodes.bgBrightBlue;
            case 'magenta':
                return ansiEscCodes.bgMagenta;
            case '*magenta':
                return ansiEscCodes.bgBrightMagenta;
            case 'cyan':
                return ansiEscCodes.bgCyan;
            case '*cyan':
                return ansiEscCodes.bgBrightCyan;
            case 'black':
                return ansiEscCodes.bgBlack;
            case '*black':
                return ansiEscCodes.bgBrightBlack;
            case 'white':
                return ansiEscCodes.bgWhite;
            case '*white':
                return ansiEscCodes.bgBrightWhite;
            default:
                return ansiEscCodes.bgWhite;
        }
    }

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

