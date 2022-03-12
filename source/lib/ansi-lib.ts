const ANSI_ESC_CODE = {
  // TEXT STYLE
  DEFAULT: 0,
  BOLD: 1,
  ITALIC: 3,
  UNDERLINE: 4,
  INVERSION: 7,
  HIDDEN: 8,
  STRIKETHROUGH: 9,

  // FOREGROUND COLORS
  FG_BLACK: 30,
  FG_RED: 31,
  FG_GREEN: 32,
  FG_YELLOW: 33,
  FG_BLUE: 34,
  FG_MAGENTA: 35,
  FG_CYAN: 36,
  FG_WHITE: 37,
  FG_DEFAULT: 39,

  // BRIGHT FOREGROUND COLORS
  FG_BRIGHT_BLACK: 90,
  FG_BRIGHT_RED: 91,
  FG_BRIGHT_GREEN: 92,
  FG_BRIGHT_YELLOW: 93,
  FG_BRIGHT_BLUE: 94,
  FG_BRIGHT_MAGENTA: 95,
  FG_BRIGHT_CYAN: 96,
  FG_BRIGHT_WHITE: 97,

  // BACKGROUND COLORS
  BG_BLACK: 40,
  BG_RED: 41,
  BG_GREEN: 42,
  BG_YELLOW: 43,
  BG_BLUE: 44,
  BG_MAGENTA: 45,
  BG_CYAN: 46,
  BG_WHITE: 47,
  BG_DEFAULT: 49, // ALIAS: Reset, None

  // BRIGHT BACKGROUND COLORS
  BG_BRIGHT_BLACK: 100,
  BG_BRIGHT_RED: 101,
  BG_BRIGHT_GREEN: 102,
  BG_BRIGHT_YELLOW: 103,
  BG_BRIGHT_BLUE: 104,
  BG_BRIGHT_MAGENTA: 105,
  BG_BRIGHT_CYAN: 106,
  BG_BRIGHT_WHITE: 107
};

/**
 * The purpose of **ANSIColorCodes** is to covert string references into ANSI Escape
 * codes. For example, if a person wanted to use the code for coloring a FG blue, they
 * would simple use the static method `ANSIColorCodes.getFg('blue')`, which would return
 * the numeric value 34, which is the ANSI Escape code for a blue foreground. The same
 * can be done for styles `getStyle(...)` & `getBg(...)`.
 * */
export default class ANSIColorCodes {
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
  static getBg (clr: string) {
    switch (clr.toLowerCase().trim()) {
      case 'red':
        return ANSI_ESC_CODE.BG_RED;
      case 'r':
        return ANSI_ESC_CODE.BG_RED;
      case 'brightRed':
        return ANSI_ESC_CODE.BG_BRIGHT_RED;
      case 'r+':
        return ANSI_ESC_CODE.BG_BRIGHT_RED;

      case 'green':
        return ANSI_ESC_CODE.BG_GREEN;
      case 'g':
        return ANSI_ESC_CODE.BG_GREEN;
      case 'brightGreen':
        return ANSI_ESC_CODE.BG_BRIGHT_GREEN;
      case 'g+':
        return ANSI_ESC_CODE.BG_BRIGHT_GREEN;

      case 'yellow':
        return ANSI_ESC_CODE.BG_YELLOW;
      case 'y':
        return ANSI_ESC_CODE.BG_YELLOW;
      case 'brightYellow':
        return ANSI_ESC_CODE.BG_BRIGHT_YELLOW;
      case 'y+':
        return ANSI_ESC_CODE.BG_BRIGHT_YELLOW;

      case 'blue':
        return ANSI_ESC_CODE.BG_BLUE;
      case 'b':
        return ANSI_ESC_CODE.BG_BLUE;
      case 'brightBlue':
        return ANSI_ESC_CODE.BG_BRIGHT_BLUE;
      case 'b+':
        return ANSI_ESC_CODE.BG_BRIGHT_BLUE;

      case 'magenta':
        return ANSI_ESC_CODE.BG_MAGENTA;
      case 'm':
        return ANSI_ESC_CODE.BG_MAGENTA;
      case 'brightMagenta':
        return ANSI_ESC_CODE.BG_BRIGHT_MAGENTA;
      case 'm+':
        return ANSI_ESC_CODE.BG_BRIGHT_MAGENTA;

      case 'cyan':
        return ANSI_ESC_CODE.BG_CYAN;
      case 'c':
        return ANSI_ESC_CODE.BG_CYAN;
      case 'brightCyan':
        return ANSI_ESC_CODE.BG_BRIGHT_CYAN;
      case 'c+':
        return ANSI_ESC_CODE.BG_BRIGHT_CYAN;

      case 'black':
        return ANSI_ESC_CODE.BG_BLACK;
      case 'k':
        return ANSI_ESC_CODE.BG_BLACK;
      case 'brightBlack':
        return ANSI_ESC_CODE.BG_BRIGHT_BLACK;
      case 'k+':
        return ANSI_ESC_CODE.BG_BRIGHT_BLACK;

      case 'white':
        return ANSI_ESC_CODE.BG_WHITE;
      case 'w':
        return ANSI_ESC_CODE.BG_WHITE;
      case 'brightWhite':
        return ANSI_ESC_CODE.BG_BRIGHT_WHITE;
      case 'w+':
        return ANSI_ESC_CODE.BG_BRIGHT_WHITE;
      default:
        return ANSI_ESC_CODE.BG_WHITE;
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
 * @param style A valid, ANSI Supported, style-type
 * @returns ANSI Escape code that coresponds to the style passed into the style parameter
 *  */
  static getStyle (style:string) {
    switch (style.trim().toLowerCase()) {
      case '':
        return ANSI_ESC_CODE.DEFAULT;
      case 'none':
        return ANSI_ESC_CODE.DEFAULT;
      case 'bold':
        return ANSI_ESC_CODE.BOLD;
      case 'b':
        return ANSI_ESC_CODE.BOLD;
      case 'italic':
        return ANSI_ESC_CODE.ITALIC;
      case 'i':
        return ANSI_ESC_CODE.ITALIC;
      case 'underline':
        return ANSI_ESC_CODE.UNDERLINE;
      case 'u':
        return ANSI_ESC_CODE.UNDERLINE;
      case 'invert':
        return ANSI_ESC_CODE.INVERSION;
      case 'hidden':
        return ANSI_ESC_CODE.HIDDEN;
      case 'strikethrough':
        return ANSI_ESC_CODE.STRIKETHROUGH;
      case 's':
        return ANSI_ESC_CODE.STRIKETHROUGH;
      default:
        return ANSI_ESC_CODE.DEFAULT;
    }
  }
}

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
export function getAnsiFgCode (clr:string) {
  switch (clr.toLowerCase().trim()) {
    case 'red':
      return ANSI_ESC_CODE.FG_RED;
    case 'r':
      return ANSI_ESC_CODE.FG_RED;
    case 'brightRed':
      return ANSI_ESC_CODE.FG_BRIGHT_RED;
    case 'r+':
      return ANSI_ESC_CODE.FG_BRIGHT_RED;

    case 'green':
      return ANSI_ESC_CODE.FG_GREEN;
    case 'g':
      return ANSI_ESC_CODE.FG_GREEN;
    case 'brightGreen':
      return ANSI_ESC_CODE.FG_BRIGHT_GREEN;
    case 'g+':
      return ANSI_ESC_CODE.FG_BRIGHT_GREEN;

    case 'yellow':
      return ANSI_ESC_CODE.FG_YELLOW;
    case 'y':
      return ANSI_ESC_CODE.FG_YELLOW;
    case 'brightYellow':
      return ANSI_ESC_CODE.FG_BRIGHT_YELLOW;
    case 'y+':
      return ANSI_ESC_CODE.FG_BRIGHT_YELLOW;

    case 'blue':
      return ANSI_ESC_CODE.FG_BLUE;
    case 'b':
      return ANSI_ESC_CODE.FG_BLUE;
    case 'brightBlue':
      return ANSI_ESC_CODE.FG_BRIGHT_BLUE;
    case 'b+':
      return ANSI_ESC_CODE.FG_BRIGHT_BLUE;

    case 'magenta':
      return ANSI_ESC_CODE.FG_MAGENTA;
    case 'm':
      return ANSI_ESC_CODE.FG_MAGENTA;
    case 'brightMagenta':
      return ANSI_ESC_CODE.FG_BRIGHT_MAGENTA;
    case 'm+':
      return ANSI_ESC_CODE.FG_BRIGHT_MAGENTA;

    case 'cyan':
      return ANSI_ESC_CODE.FG_CYAN;
    case 'c':
      return ANSI_ESC_CODE.FG_CYAN;
    case 'brightCyan':
      return ANSI_ESC_CODE.FG_BRIGHT_CYAN;
    case 'c+':
      return ANSI_ESC_CODE.FG_BRIGHT_CYAN;

    case 'black':
      return ANSI_ESC_CODE.FG_BLACK;
    case 'k':
      return ANSI_ESC_CODE.FG_BLACK;
    case 'brightBlack':
      return ANSI_ESC_CODE.FG_BRIGHT_BLACK;
    case 'k+':
      return ANSI_ESC_CODE.FG_BRIGHT_BLACK;

    case 'white':
      return ANSI_ESC_CODE.FG_WHITE;
    case 'w':
      return ANSI_ESC_CODE.FG_WHITE;
    case 'brightWhite':
      return ANSI_ESC_CODE.FG_BRIGHT_WHITE;
    case 'w+':
      return ANSI_ESC_CODE.FG_BRIGHT_WHITE;

    default:
      return ANSI_ESC_CODE.FG_WHITE;
  }
}



export function validateFgEscCode (fgColorCode: number): boolean {
  if (typeof fgColorCode !== 'number') {
    throw new TypeError(
      'The arg passed into `validateFgEscCode()` is invalid. Expected a number, ' +
        `but received an argument of type ${typeof fgColorCode}`
    );
  }

  if (fgColorCode < 30) return false;
  if (fgColorCode > 37 && fgColorCode < 91) return false;
  if (fgColorCode > 97) return false;

  return true;
}



export function validateBgEscCode (fgColorCode: number):boolean {
  if (typeof fgColorCode !== 'number') {
    throw new TypeError(
      'The arg passed into `validateBgEscCode()` is invalid. Expected a number, ' +
        `but received an argument of type ${typeof fgColorCode}`
    );
  }

  if (fgColorCode < 30) return false;
  if (fgColorCode > 37 && fgColorCode < 91) return false;
  if (fgColorCode > 97) return false;

  return true;
}
