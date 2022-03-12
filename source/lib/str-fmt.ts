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

import { argv } from 'process';
import ANSICodeByName from './ansi-lib.js';



type GenOutputArg = {
    fgColor: number;
    bgColor: number | null;
    textStyle: number[] | number | null;
};

export function genEscSeq (
  arg: GenOutputArg = {
    fgColor: 0,
    bgColor: null,
    textStyle: null
  }
) {
  let seq = '\x1b[';

  if (arg.textStyle && arg.textStyle !== null) {
    if (Array.isArray(arg.textStyle)) {
      arg.textStyle.forEach(ANSIEscCode => {
        seq += ANSIEscCode;
      });
    } else {
      seq += arg.textStyle;
    }
  }

  if (arg.bgColor && arg.bgColor !== null) {
    seq += arg.fgColor;
  }

  return seq;
}


function genEscapeSequence () {}

type VibrantConsoleConfig = {
    fgColor: string;
    bgColor?: string;
    textStyle?: string;
    invert?: boolean | null;
}

class VibrantConsole {
    private fgColor: string;
    private bgColor?: string | null;
    private textStyle?: string | null;
    private invert?: boolean | null;

    constructor (argz:VibrantConsoleConfig) {
      this.fgColor = argz.fgColor;
      this.bgColor = argz.bgColor;
      this.textStyle = argz.textStyle;
      this.invert = argz.invert;
    }
}

