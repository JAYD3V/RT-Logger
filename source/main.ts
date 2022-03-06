/**
 * @prettier
 * @file "./module/main.js"
 * @fileoverview Module's Entry Point */

import { clrStr, code } from './logger/lib/color.js';

clrStr(
  'Apples are tasty with peanut butter & ' +
    'bananas. It makes for a good breakfast.',
  code.red);
