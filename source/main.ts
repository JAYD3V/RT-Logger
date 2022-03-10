/**
 * @format
 * @JAYD3V
 * @author Andrew J Chambers Jr | W3Dojo@gmail.com
 * @file "./source/main.ts"
 * @fileoverview Module's entry point. When the module is initiated, the program/app using
 * it will receive its first instructions from this file.
 * <!---------------------------------------------------------------------------------> */

import RefANSICodeByName from './lib/ansi-escape-codes.js';

const sumStr = 'ANSI codes are fun!';
const close = '\x1b[0m';

const fg = RefANSICodeByName.fgColor('Red');
const bg = RefANSICodeByName.bgColor('Black');
const style = RefANSICodeByName.textStyle('bold');

const escSequence = `\x1b[${style};${fg};${bg}m${sumStr}${close}`;

console.log(escSequence);

