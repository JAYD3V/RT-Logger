/** ___________________________________________________________________________________
 * @file "./FILE_PATH/FILE_NAME.FILE_EXT"
 * @fileoverview Provides a lone function for removing ANSI standardized escape sequences.
 * @format
 * @author A. Chambers (w3dojo@gmail.com)
 * @JAYD3V
 * @license MIT
 * -----------------------------------------------------------------------------------
 */
/* eslint-disable no-control-regex */
const regx = /\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])/gm;

/**
 * Sanitizes a string of all ANSI standardized escape sequences.
 * @param str String to be sanitized.
 * @returns Sanitized version of the string passed in. */
const rmEscSeqs = (str:string) => str.replace(regx, '');

export default rmEscSeqs;
