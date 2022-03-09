/**
 * @format
 * @JAYD3V
 * @author Andrew J Chambers Jr | W3Dojo@gmail.com
 * @file "./source/main.ts"
 * @fileoverview Module's entry point. When the module is initiated, the program/app using
 * it will receive its first instructions from this file.
 * <!---------------------------------------------------------------------------------> */

function clrFmtStr (fg: number, bg?: number | null, style?: number | null) {
    const openEsc = style
        ? `\x1b[${style};`
        : `\x1b[0;`;

    return bg
        ? `${openEsc}${fg};${bg}m`
        : `${openEsc}${fg}m`;
}

const str = clrFmtStr(31, 40, 3) + 'Hello World' + '\x1b[0m';


console.log('\n%s\n', str);
