/**
 *---------------------------------------------------------------------------------------*
 * @format
 * @JAYD3V
 * @author A. Chambers - W3Dojo@gmail.com
 * @file "./FILE_PATH/FILE_NAME.FILE_EXT"
 * @fileoverview
 * @license MIT
 *---------------------------------------------------------------------------------------*
 */
declare type jsonPath = string;
export declare class JsonFile {
    jsonPath: jsonPath;
    constructor(jsonPath: jsonPath);
    readJsonFile(): Promise<void>;
    json2object: () => void;
}
export {};
//# sourceMappingURL=rd-json.d.ts.map