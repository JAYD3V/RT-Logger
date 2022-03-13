export const ANSI_ESC_CODE = {
  // TEXT STYLE
  DEFAULT       : 0,
  BOLD          : 1,
  ITALIC        : 3,
  UNDERLINE     : 4,
  INVERSION     : 7,
  HIDDEN        : 8,
  STRIKETHROUGH : 9,

  // FOREGROUND COLORS
  FG_BLACK   : 30,
  FG_RED     : 31,
  FG_GREEN   : 32,
  FG_YELLOW  : 33,
  FG_BLUE    : 34,
  FG_MAGENTA : 35,
  FG_CYAN    : 36,
  FG_WHITE   : 37,
  FG_DEFAULT : 39,

  // BRIGHT FOREGROUND COLORS
  FG_BRIGHT_BLACK   : 90,
  FG_BRIGHT_RED     : 91,
  FG_BRIGHT_GREEN   : 92,
  FG_BRIGHT_YELLOW  : 93,
  FG_BRIGHT_BLUE    : 94,
  FG_BRIGHT_MAGENTA : 95,
  FG_BRIGHT_CYAN    : 96,
  FG_BRIGHT_WHITE   : 97,

  // BACKGROUND COLORS
  BG_BLACK   : 40,
  BG_RED     : 41,
  BG_GREEN   : 42,
  BG_YELLOW  : 43,
  BG_BLUE    : 44,
  BG_MAGENTA : 45,
  BG_CYAN    : 46,
  BG_WHITE   : 47,
  BG_DEFAULT : 49, // ALIAS: Reset, None

  // BRIGHT BACKGROUND COLORS
  BG_BRIGHT_BLACK   : 100,
  BG_BRIGHT_RED     : 101,
  BG_BRIGHT_GREEN   : 102,
  BG_BRIGHT_YELLOW  : 103,
  BG_BRIGHT_BLUE    : 104,
  BG_BRIGHT_MAGENTA : 105,
  BG_BRIGHT_CYAN    : 106,
  BG_BRIGHT_WHITE   : 107
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
export function getAnsiFgCode (clr:string) {
  switch (clr.toLowerCase().trim()) {
    case 'red':
      return ANSI_ESC_CODE.FG_RED;
    case 'r':
      return ANSI_ESC_CODE.FG_RED;
    case 'brightRed':
      return ANSI_ESC_CODE.FG_BRIGHT_RED;
    case 'r!':
      return ANSI_ESC_CODE.FG_BRIGHT_RED;

    case 'green':
      return ANSI_ESC_CODE.FG_GREEN;
    case 'g':
      return ANSI_ESC_CODE.FG_GREEN;
    case 'brightGreen':
      return ANSI_ESC_CODE.FG_BRIGHT_GREEN;
    case 'g!':
      return ANSI_ESC_CODE.FG_BRIGHT_GREEN;

    case 'yellow':
      return ANSI_ESC_CODE.FG_YELLOW;
    case 'y':
      return ANSI_ESC_CODE.FG_YELLOW;
    case 'brightYellow':
      return ANSI_ESC_CODE.FG_BRIGHT_YELLOW;
    case 'y!':
      return ANSI_ESC_CODE.FG_BRIGHT_YELLOW;

    case 'blue':
      return ANSI_ESC_CODE.FG_BLUE;
    case 'b':
      return ANSI_ESC_CODE.FG_BLUE;
    case 'brightBlue':
      return ANSI_ESC_CODE.FG_BRIGHT_BLUE;
    case 'b!':
      return ANSI_ESC_CODE.FG_BRIGHT_BLUE;

    case 'magenta':
      return ANSI_ESC_CODE.FG_MAGENTA;
    case 'm':
      return ANSI_ESC_CODE.FG_MAGENTA;
    case 'brightMagenta':
      return ANSI_ESC_CODE.FG_BRIGHT_MAGENTA;
    case 'm!':
      return ANSI_ESC_CODE.FG_BRIGHT_MAGENTA;

    case 'cyan':
      return ANSI_ESC_CODE.FG_CYAN;
    case 'c':
      return ANSI_ESC_CODE.FG_CYAN;
    case 'brightCyan':
      return ANSI_ESC_CODE.FG_BRIGHT_CYAN;
    case 'c!':
      return ANSI_ESC_CODE.FG_BRIGHT_CYAN;

    case 'black':
      return ANSI_ESC_CODE.FG_BLACK;
    case 'k':
      return ANSI_ESC_CODE.FG_BLACK;
    case 'brightBlack':
      return ANSI_ESC_CODE.FG_BRIGHT_BLACK;
    case 'k!':
      return ANSI_ESC_CODE.FG_BRIGHT_BLACK;

    case 'white':
      return ANSI_ESC_CODE.FG_WHITE;
    case 'w':
      return ANSI_ESC_CODE.FG_WHITE;
    case 'brightWhite':
      return ANSI_ESC_CODE.FG_BRIGHT_WHITE;
    case 'w!':
      return ANSI_ESC_CODE.FG_BRIGHT_WHITE;

    default:
      return ANSI_ESC_CODE.FG_WHITE;
  }
}

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
export function getAnsiBgCode (clr:string) {
  switch (clr.toLowerCase().trim()) {
    case 'red':
      return ANSI_ESC_CODE.BG_RED;
    case 'r':
      return ANSI_ESC_CODE.BG_RED;
    case 'brightRed':
      return ANSI_ESC_CODE.BG_BRIGHT_RED;
    case 'r!':
      return ANSI_ESC_CODE.BG_BRIGHT_RED;

    case 'green':
      return ANSI_ESC_CODE.BG_GREEN;
    case 'g':
      return ANSI_ESC_CODE.BG_GREEN;
    case 'brightGreen':
      return ANSI_ESC_CODE.BG_BRIGHT_GREEN;
    case 'g!':
      return ANSI_ESC_CODE.BG_BRIGHT_GREEN;

    case 'yellow':
      return ANSI_ESC_CODE.BG_YELLOW;
    case 'y':
      return ANSI_ESC_CODE.BG_YELLOW;
    case 'brightYellow':
      return ANSI_ESC_CODE.BG_BRIGHT_YELLOW;
    case 'y!':
      return ANSI_ESC_CODE.BG_BRIGHT_YELLOW;

    case 'blue':
      return ANSI_ESC_CODE.BG_BLUE;
    case 'b':
      return ANSI_ESC_CODE.BG_BLUE;
    case 'brightBlue':
      return ANSI_ESC_CODE.BG_BRIGHT_BLUE;
    case 'b!':
      return ANSI_ESC_CODE.BG_BRIGHT_BLUE;

    case 'magenta':
      return ANSI_ESC_CODE.BG_MAGENTA;
    case 'm':
      return ANSI_ESC_CODE.BG_MAGENTA;
    case 'brightMagenta':
      return ANSI_ESC_CODE.BG_BRIGHT_MAGENTA;
    case 'm!':
      return ANSI_ESC_CODE.BG_BRIGHT_MAGENTA;

    case 'cyan':
      return ANSI_ESC_CODE.BG_CYAN;
    case 'c':
      return ANSI_ESC_CODE.BG_CYAN;
    case 'brightCyan':
      return ANSI_ESC_CODE.BG_BRIGHT_CYAN;
    case 'c!':
      return ANSI_ESC_CODE.BG_BRIGHT_CYAN;

    case 'black':
      return ANSI_ESC_CODE.BG_BLACK;
    case 'k':
      return ANSI_ESC_CODE.BG_BLACK;
    case 'brightBlack':
      return ANSI_ESC_CODE.BG_BRIGHT_BLACK;
    case 'k!':
      return ANSI_ESC_CODE.BG_BRIGHT_BLACK;

    case 'white':
      return ANSI_ESC_CODE.BG_WHITE;
    case 'w':
      return ANSI_ESC_CODE.BG_WHITE;
    case 'brightWhite':
      return ANSI_ESC_CODE.BG_BRIGHT_WHITE;
    case 'w!':
      return ANSI_ESC_CODE.BG_BRIGHT_WHITE;

    default:
      return ANSI_ESC_CODE.BG_WHITE;
  }
}

export function validateFgColorCode (fgClrCode: number): boolean {
  if (fgClrCode < 30 || fgClrCode > 98) {
    return false;
  }

  return (fgClrCode > 38 && fgClrCode < 90);
}

export function validateBgColorCode (fgClrCode: number):boolean {
  if (fgClrCode < 40 || fgClrCode > 108) return false;

  return (fgClrCode > 48 && fgClrCode < 100);
}

/**
 * Tests a number to see if it is a valid ANSI TextStyle code.
 *
 * @param textStyleCode Number that will be tested.
 * @returns true if the number is `valid. Returns `false` if the number is invalid.
 * */
export function validateStyleCode (textStyleCode:number) {
  switch (textStyleCode) {
    case 0: return true;
    case 1: return true;
    case 3: return true;
    case 4: return true;
    case 7: return true;
    case 9: return true;

    default: return false;
  }
}
