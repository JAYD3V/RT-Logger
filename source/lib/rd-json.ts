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


import { readFile } from 'fs';

type jsonPath = string;


const validateJsonPath = (jsonPath: jsonPath) => {
    if (jsonPath.endsWith('.json')) {
        throw new ReferenceError(
            `Invalid filepath: "${jsonPath}".\nFilename does not reference a json file.`
        );
    }

    return jsonPath;
};

export class JsonFile {
    jsonPath: jsonPath;

    constructor (jsonPath: jsonPath) {
        this.jsonPath = validateJsonPath(jsonPath);
    }

    async readJsonFile () {

    }

    json2object = () => {

    };
}
