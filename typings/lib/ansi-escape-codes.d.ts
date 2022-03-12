/**
 * The purpose of **ANSICodes** is to covert string references into ANSI Escape
 * codes. For example, if a person wanted to use the code for coloring a FG blue, they
 * would simple use the static method `ANSICodes.getFg('blue')`, which would return
 * the numeric value 34, which is the ANSI Escape code for a blue foreground. The same
 * can be done for styles `getStyle(...)` & `getBg(...)`.
 * */
declare class ANSICodes {
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
       * @param clr The name of a valid color listed above.
       * @returns the ANSI Escape code that coresponds to the color's name passed into `clr`.
       **/
    static getFg(clr: string): number;
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
       * ##### PLEASE NOTE: ANSI Escape codes for bg-colors are different than the escape codes for fg-colors, for example: `getBg('blue')` returns `44`, while as; `getFg(clr)` returns 34.
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
       * @param clr The name of a valid color listed above.
       * @returns the ANSI Escape code that coresponds to the color's name passed into `clr`.
       **/
    static getBg(clr: string): number;
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
       * @param style A valid, ANSI Supported, style-type
       * @returns ANSI Escape code that coresponds to the style passed into the style parameter
       *  */
    static getStyle(style: string): number;
}
export default ANSICodes;
//# sourceMappingURL=ansi-escape-codes.d.ts.map