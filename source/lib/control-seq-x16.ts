const vldColors = [
    'black', 'red', 'green', 'yellow', 'blue', 'magenta',
    'cyan', 'white', 'black+', 'red+', 'green+', 'blue+',
    'yellow+', 'magenta+', 'cyan+', 'white+'
];

const vldStyles = [
    'bold', 'italic', 'underline', 'invert', 'erase', 'strikethrough'
];

function colorByName (color: string) {
  switch (color.trim().toLowerCase()) {
    case 'black':
      return 30;
    case 'red':
      return 31;
    case 'green':
      return 32;
    case 'yellow':
      return 33;
    case 'blue':
      return 34;
    case 'magenta':
      return 35;
    case 'cyan':
      return 36;
    case 'white':
      return 37;
    case 'black+':
      return 30;
    case 'red+':
      return 31;
    case 'green+':
      return 32;
    case 'yellow+':
      return 33;
    case 'blue+':
      return 34;
    case 'magenta+':
      return 35;
    case 'cyan+':
      return 36;
    case 'white+':
      return 37;
    default:
      return 39; // Sets the terminals output fg color to its default value.
  }
}

function styleByName (testStyle: string) {
  switch (testStyle.trim().toLowerCase()) {
    case 'default':
      return 0;
    case 'bold':
      return 1;
    case 'italic':
      return 3;
    case 'underline':
      return 4;
    case 'invert':
      return 7;
    case 'erase':
      return 8;
    case 'strikethrough':
      return 9;
    default:
      return 0;
  }
}

/** #### Validates color-names.
 * @param colorName colorname to validate
 * @returns **`true`** when the color-name is valid..
 * @returns **`false`** when the color-name is invalid.
 * @JAYD3V */
export function validateColorName (color: string) {
  for (let i = 0; i < 16; i++) {
    if (color === vldColors[i]) { return true; }
  }
  return false;
}

export function validateStyleName (style: string) {
  for (let i = 0; i < 16; i++) {
    if (style === vldStyles[i]) { return true; }
  }

  return false;
}

export function validateFgClrCode (fgClrCode: number) {
  return ((fgClrCode > 30 && fgClrCode < 37)
      || (fgClrCode > 90 && fgClrCode < 97)
      || (fgClrCode === 39));
}

export function validateBgClrCode (bgColorCode: number) {
  return ((bgColorCode > 40 && bgColorCode < 47)
      || (bgColorCode > 100 && bgColorCode < 107)
      || (bgColorCode === 109));
}

/**
 * Tests a number to see if it is a valid ANSI TextStyle code.
 *
 * @param textStyleCode Number that will be tested.
 * @returns true if the number is `valid. Returns `false` if the number is invalid.
 * */
export function validateStyleCode (textStyleCode: number) {
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

export type colorReference = string | number;

/**
 * @param colorRef
 * @returns `true` if Valid & `false` when invalid. */
export function isValidColorRef (colorRef: colorReference) {
  if (typeof colorRef === 'string') {
    return validateColorName(colorRef);
  }
  if (typeof colorRef === 'number') {
    if (validateBgClrCode(colorRef) === true) { return true; }
    if (validateFgClrCode(colorRef) === true) { return true; }
    if (validateStyleCode(colorRef) === true) { return true; }

    return false;
  }

  throw new TypeError(
      `Parameter colorRef's type is invalid.\nFunc: validateControlArg `);
}

