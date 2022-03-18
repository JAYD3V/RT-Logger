/** #### Validates color-names.
 * @param colorName colorname to validate
 * @returns **`true`** when the color-name is valid..
 * @returns **`false`** when the color-name is invalid.
 * @JAYD3V */
export declare function validateColorName(color: string): boolean;
export declare function validateStyleName(style: string): boolean;
export declare function validateFgClrCode(fgClrCode: number): boolean;
export declare function validateBgClrCode(bgColorCode: number): boolean;
/**
 * Tests a number to see if it is a valid ANSI TextStyle code.
 *
 * @param textStyleCode Number that will be tested.
 * @returns true if the number is `valid. Returns `false` if the number is invalid.
 * */
export declare function validateStyleCode(textStyleCode: number): boolean;
export declare type colorReference = string | number;
/**
 * @param colorRef
 * @returns `true` if Valid & `false` when invalid. */
export declare function isValidColorRef(colorRef: colorReference): boolean;
//# sourceMappingURL=control-seq-x16.d.ts.map