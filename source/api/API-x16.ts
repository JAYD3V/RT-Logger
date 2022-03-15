/** ____________________________________________________________________________
 * @format
 * @JAYD3V
 * @author A. Chambers -> W3Dojo@gmail.com
 * @file "${rootDir}/(source/module)/logger/lib/color.ts"
 * @fileoverview "This file contains a library that colors console output
 * by formatting the strings that are logged in the console with ANSI escape
 *  sequences & color codes."
 * @license MIT
 * ------------------------------------------------------------------------ */


export function vibrant (fg:string) {
    const internal = {
        log (mesg:string) {
            console.log(mesg);
            return internal;
        }
    };
    return internal;
}
