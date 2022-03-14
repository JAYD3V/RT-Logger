
export const escControlArg = {
    // TEXT STYLE
    RESET_STYLE   : 0,
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
    RESET_FG   : 39,

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
    RESET_BG   : 49,

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

export const validColorRefs = [
    'red',
    'r',
    'brightRed',
    'r!',
    'green',
    'g',
    'brightGreen',
    'g!',
    'yellow',
    'y',
    'brightYellow',
    'y!',
    'blue',
    'b',
    'brightBlue',
    'b!',
    'magenta',
    'm',
    'brightMagenta',
    'm!',
    'cyan',
    'c',
    'brightCyan',
    'c!',
    'black',
    'k',
    'brightBlack',
    'k!',
    'white',
    'w',
    'brightWhite',
    'w!',
    'default'
];

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
        case 8: return true;
        case 9: return true;

        default: return false;
    }
}
