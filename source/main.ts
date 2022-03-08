/**
___________________________________________________________________________________
 * @format
 * @JAYD3V
 * @author Andrew J Chambers Jr | W3Dojo@gmail.com
 * @file "./source/main.ts"
 * @fileoverview Module's entry point. When the module is initiated, the program/app using
 * it will receive its first instructions from this file.
 * -----------------------------------------------------------------------------------  */

import { privateEncrypt } from 'crypto';



function clrFmtStr (fg: number, bg?: number | null, style?: number | null) {
    const openEsc = style
        ? `\x1b[${style};`
        : `\x1b[0;`;

    // Returns a dynamic version of the following example
    // '\x1b[0;31;40m' <- that would print red w/ black bg & no style
    return bg
        ? `${openEsc}${fg};${bg}m`
        : `${openEsc}${fg}m`;
}

const str = clrFmtStr(31, 40, 3) + 'Hello World' + '\x1b[0m';

console.log('\n%s\n', str);
