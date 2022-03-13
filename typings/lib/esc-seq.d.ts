export declare const ANSI_ESC_CODE: {
    DEFAULT: number;
    BOLD: number;
    ITALIC: number;
    UNDERLINE: number;
    INVERSION: number;
    HIDDEN: number;
    STRIKETHROUGH: number;
    FG_BLACK: number;
    FG_RED: number;
    FG_GREEN: number;
    FG_YELLOW: number;
    FG_BLUE: number;
    FG_MAGENTA: number;
    FG_CYAN: number;
    FG_WHITE: number;
    FG_DEFAULT: number;
    FG_BRIGHT_BLACK: number;
    FG_BRIGHT_RED: number;
    FG_BRIGHT_GREEN: number;
    FG_BRIGHT_YELLOW: number;
    FG_BRIGHT_BLUE: number;
    FG_BRIGHT_MAGENTA: number;
    FG_BRIGHT_CYAN: number;
    FG_BRIGHT_WHITE: number;
    BG_BLACK: number;
    BG_RED: number;
    BG_GREEN: number;
    BG_YELLOW: number;
    BG_BLUE: number;
    BG_MAGENTA: number;
    BG_CYAN: number;
    BG_WHITE: number;
    BG_DEFAULT: number;
    BG_BRIGHT_BLACK: number;
    BG_BRIGHT_RED: number;
    BG_BRIGHT_GREEN: number;
    BG_BRIGHT_YELLOW: number;
    BG_BRIGHT_BLUE: number;
    BG_BRIGHT_MAGENTA: number;
    BG_BRIGHT_CYAN: number;
    BG_BRIGHT_WHITE: number;
};
/**
 * ### Static Method
 *
 * &nbsp; &nbsp; &nbsp; &nbsp; **`getAnsiFgCode(clr:string)`** coverts color-names as strings into ANSI Escape Codes as numbers. This function is for use with the 16 standardized color names, that are defined by the ANSI 16x Color Standard. **Please Note:** This function returns codes that color the terminals foreground. If you want to color the background of text in a terminal, you will need to use the `getAnsiBgCode(clr:string)` function instead.
 *
 * The ANSI standard, that this function follows, supports 8 color names. Each color-name has 2 different hues available, ***bright***, and **regular***. `8 x 2 = 16 colors in all`. The 16 colors are listed below.
 *
 * ##### NOTE: The single characters next to a color's name are shorthands. Each short hand is for the color that it is sitting adjacent to.
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
 * @param clr A valid color-name.
 * @returns ANSI Escape Code
 **/
export declare function getAnsiFgCode(clr: string): number;
/**
 * ### Static Method
 *
 * &nbsp; &nbsp; &nbsp; &nbsp; **`getAnsiBgCode(clr:string)`** coverts color-names as strings into ANSI Escape Codes as numbers. This function is for use with the 16 standardized color names, that are defined by the ANSI 16x Color Standard. **PLZ NOTE:** This function returns codes that color the terminals foreground. If you want to color the background of text in a terminal, you will need to use the `getAnsiFgCode(clr:string)` function instead.
 *
 * The ANSI standard, that this function follows, supports 8 color names. Each color-name has 2 different hues available, ***bright***, and **regular***. `8 x 2 = 16 colors in all`. The 16 colors are listed below.
 *
 * ##### NOTE: The single characters next to a color's name are shorthands. Each short hand is for the color that it is sitting adjacent to.
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
 * @param clr A valid color-name.
 * @returns ANSI Escape Code
 **/
export declare function getAnsiBgCode(clr: string): number;
export declare function validateFgColorCode(fgClrCode: number): boolean;
export declare function validateBgColorCode(fgClrCode: number): boolean;
/**
 * Tests a number to see if it is a valid ANSI TextStyle code.
 *
 * @param textStyleCode Number that will be tested.
 * @returns true if the number is `valid. Returns `false` if the number is invalid.
 * */
export declare function validateStyleCode(textStyleCode: number): boolean;
//# sourceMappingURL=esc-seq.d.ts.map