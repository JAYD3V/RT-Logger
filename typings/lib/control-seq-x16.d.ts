/** #### Validates color-names.
 * @param colorName colorname to validate
 * @returns **`true`** when the color-name is valid..
 * @returns **`false`** when the color-name is invalid.
 * @JAYD3V */
export declare function validateColorName(colorName: string): boolean;
export declare function validateFgColorCode(fgClrCode: number): boolean;
export declare function validateBgColorCode(fgClrCode: number): boolean;
/**
 * Tests a number to see if it is a valid ANSI TextStyle code.
 *
 * @param textStyleCode Number that will be tested.
 * @returns true if the number is `valid. Returns `false` if the number is invalid.
 * */
export declare function validateStyleCode(textStyleCode: number): boolean;
declare type colorReference = string | number;
/**
 * Ultimately, this function Validates a color reference, checking as to whether or not t is a number or string, that can be used as a valid argument in the lower level "Graphics Rendation Control Function"
 * @param colorReference
 * @returns
 */
export declare function validateControlArg(colorReference: colorReference): boolean;
export {};
//# sourceMappingURL=control-seq-x16.d.ts.map