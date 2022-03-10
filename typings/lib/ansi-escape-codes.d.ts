/**
 * The **ANSICodeByName** class converts color-names & style-names into ANSI Esc codes
 * so that color names & style names can be used in string form to apply the colors &
 * styles the reference to terminal output */
declare class ANSICodeByName {
    /**
     * ### Static Method
     *
     * _To reference a list of all valid arguments available to be passed to this method,
     * all colors supported by the ANSI color-standard, and shorthands that can be used
     * see README.md Sect-1.2_
     *
     *  `fgCode()` converts colors names into ANSI Escape codes. The color name passed
     * into fgCode must be an ANSI supported color. Each color ANSI supports coresponds
     * to two specific codes, one for formatting the background color of terminal output,
     * and the other for formatting the foreground color of terminal output. Obviously
     * `fgCode()` returns the code that coresponds to the terminal output's background
     * color. To get the ANSI code that coresponds to the terminal output's foreground
     * color, use `bgCode()`.
     *
     * @param colorName Takes an ANSI Supported colorname as an argument.
     * @returns ANSI-color-code
     **/
    static fgCode(colorName: string): number;
    /**
     * ### Static Method
     *
     * _To reference a list of all valid arguments available to be passed to this method,
     * all colors supported by the ANSI color-standard, and shorthands that can be used
     * see README.md Sect-1.2_
     *
     * `bgCode()` converts colors names into ANSI Escape codes. The color name passed
     * into bgCode must be an ANSI supported color. Each color ANSI supports coresponds
     * to two specific codes, one for formatting the background color of terminal output,
     * and the other for formatting the foreground color of terminal output. Obviously
     * `bgCode()` returns the code that coresponds to the terminal output's background
     * color. To get the ANSI code that coresponds to the terminal output's foreground
     * color, use `fgCode()`.
     *
     * @param colorName Takes an ANSI Supported colorname as an argument.
     * @returns ANSI-color-code
     **/
    static bgCode(colorName: string): number;
    /**
     * _To reference a list of all valid arguments available to be passed to this method,
     * all colors supported by the ANSI color-standard, and shorthands that can be used
     * see README.md Sect-1.2_
     *
     * `textStyleCode()` converts text-style names (_i.e._ italic, bold, etc) into the
     * ANSI escape-code that coresponds to the name passed in as an argument to
     * `textStyleCode`. Like the other two **`ANSICodeByName`** functions,
     * `textStyleCode` shouldn't be used to directly format terminal output,
     *  but rather to create custom functions that style terminalOutput.
     *
     * @param styleType String that references style by name (i.e. italic, bold, etc...)
     * @returns The ANSI Escape code that coresponds to the styles name passed in.
     *  */
    static textStyleCode(styleType: string): number;
}
export default ANSICodeByName;
//# sourceMappingURL=ansi-escape-codes.d.ts.map