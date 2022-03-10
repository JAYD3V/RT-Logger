/**
 * @format
 * @JAYD3V
 * @author Andrew J Chambers Jr | W3Dojo@gmail.com
 * @file "./source/main.ts"
 * @fileoverview Module's entry point. When the module is initiated, the program/app using
 * it will receive its first instructions from this file.
 * <!---------------------------------------------------------------------------------> */

import ANSICodeByName from './lib/ansi-escape-codes.js';

type TextStyle = number | string;

const testArray = [
  'italic',
  'bold',
  'italic bold',
  'fooBar foofoo head',
  'underline',
  'strikethrough',
  'bold',
  'italic'
];

namespace styleAttributes {
    const textStyle = {
      apple: 'foo'
    };

    const textStyleArg = () => {
      return 0;
    };
}

function validateTextStyle (textStyle: TextStyle) {
  if (typeof textStyle === 'string') {
    textStyle = ANSICodeByName.textStyleCode(textStyle);
  } else if (typeof textStyle !== 'number') {
    const e = new TypeError();
    e.message +=
            '\nError validating textStyle: ARGUMENTS TYPE IS INVALID\n' +
            'Expected a primitive type of `string` or `number`, but received a type of ' +
            `${typeof textStyle} instead`;
  }

  switch (textStyle) {
    case 1:
      return true;
    case 3:
      return true;
    case 4:
      return true;
    case 7:
      return true;
    case 9:
      return true;
    default:
      return false;
  }
}

testArray.forEach(textstyle => {
  const isValid = validateTextStyle(textstyle);
  console.log(`TEXTSTYLE = ${textstyle} | isValid: ${isValid}`);
});
