import { type } from 'os';
import { validateStyleCode } from './color-x16-lib.js';

const x16palette = [
    'black',   'red',       'green',   'yellow',
    'blue',    'magenta',   'cyan',    'white',
    'black+',  'red+',      'green+',  'yellow+',
    'blue+',   'magenta+',  'cyan+',   'white+'
];

function referenceColorByName (color:string) {
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
export function validateColorName(colorName:string){
    for(var i = 0; i < 16; i++ ){
        if(colorName === x16palette[i]) return true;
    }

    return false;
}

export function validateFgColorCode (fgClrCode: number): boolean {
    if (fgClrCode < 30 || fgClrCode > 98) {
        return false;
    }

    return (fgClrCode > 38 && fgClrCode < 90);
}

export function validateBgColorCode (fgClrCode: number){
    if (fgClrCode < 40 || fgClrCode > 108 || fgClrCode ) {
        return false;
    }

    return (fgClrCode > 48 && fgClrCode < 100);
}


type colorReference = string | number;

/**
 * Ultimately, this function Validates a color reference, checking as to whether or not t is a number or string, that can be used as a valid argument in the lower level "Graphics Rendation Control Function"
 * @param colorReference
 * @returns
 */
export function validateControlArg(colorReference: colorReference){
    if(typeof colorReference === 'string'){
        for(var i = 0; i < 16; i++ ){
            if(colorReference === x16palette[i]) return true;
        }

        return false;
    }

    if(typeof colorReference === 'number'){
        if(validateBgColorCode(colorReference) === true) return true;
        if(validateFgColorCode(colorReference) === true) return true;
        if(validateStyleCode(colorReference) === true) return true;

        return false;
    }

    throw new TypeError(
        `colorReference's type is invalid. Expected a number or string, but` +
            `the value ${colorReference} was received`
    );
}

