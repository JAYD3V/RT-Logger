import { type } from 'os';

const vldColors = [
    'black', 'red', 'green', 'yellow',
    'blue', 'magenta', 'cyan', 'white',
    'black+', 'red+', 'green+', 'yellow+',
    'blue+', 'magenta+', 'cyan+', 'white+'
];

function referenceColorByName(color: string) {
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


/** #### Validates color-names.
 * @param colorName colorname to validate
 * @returns **`true`** when the color-name is valid..
 * @returns **`false`** when the color-name is invalid.
 * @JAYD3V */
export function validateColorName(colorName: string) {
    for (var i = 0; i < 16; i++) {
        if (colorName === vldColors[i]) { return true; }
    }

    return false;
}

export function validateFgColorCode(fgColorCtrlArg: number) {
    return (
        (fgColorCtrlArg > 30 && fgColorCtrlArg < 37)
        || (fgColorCtrlArg > 90
            && fgColorCtrlArg < 97)
        || (fgColorCtrlArg === 39));
}

export function validateBgColorCode(bgColorCtrlArg: number) {
    if (bgColorCtrlArg < 40 || bgColorCtrlArg > 108 || bgColorCtrlArg) {
        return false;
    }

    return (bgColorCtrlArg > 48 && bgColorCtrlArg < 100);
}

/**
 * Tests a number to see if it is a valid ANSI TextStyle code.
 *
 * @param textStyleCode Number that will be tested.
 * @returns true if the number is `valid. Returns `false` if the number is invalid.
 * */
export function validateStyleCode(textStyleCode: number) {
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
export function validateControlArg(colorRef: colorReference) {
    if (typeof colorRef === 'string') {
        for (var i = 0; i < 16; i++) {
            if (colorRef === vldColors[i]) { return true; }
        }

        return false;
    }

    if (typeof colorRef === 'number') {
        console.log('Numeric ColorReference = ' + colorRef);

        if (validateBgColorCode(colorRef) === true) {
            console.log('ValidBgColorCode: ' + true);
            return true;
        }

        if (validateFgColorCode(colorRef) === true) {
            console.log('ValidBgColorCode: ' + true);
            return true;
        }

        if (validateStyleCode(colorRef) === true) {
            console.log('ValidStyleCode: ' + true);
            return true;
        }

        return false;
    }

    throw new TypeError(
        `colorReference's type is invalid. Expected a number or string, but` +
        `the value ${colorRef} was received`
    );
}

