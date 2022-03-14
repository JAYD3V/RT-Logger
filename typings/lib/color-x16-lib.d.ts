export declare const escControlArg: {
    RESET_STYLE: number;
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
    RESET_FG: number;
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
    RESET_BG: number;
    BG_BRIGHT_BLACK: number;
    BG_BRIGHT_RED: number;
    BG_BRIGHT_GREEN: number;
    BG_BRIGHT_YELLOW: number;
    BG_BRIGHT_BLUE: number;
    BG_BRIGHT_MAGENTA: number;
    BG_BRIGHT_CYAN: number;
    BG_BRIGHT_WHITE: number;
};
export declare const validColorRefs: string[];
export declare function validateFgColorCode(fgClrCode: number): boolean;
export declare function validateBgColorCode(fgClrCode: number): boolean;
/**
 * Tests a number to see if it is a valid ANSI TextStyle code.
 *
 * @param textStyleCode Number that will be tested.
 * @returns true if the number is `valid. Returns `false` if the number is invalid.
 * */
export declare function validateStyleCode(textStyleCode: number): boolean;
//# sourceMappingURL=color-x16-lib.d.ts.map