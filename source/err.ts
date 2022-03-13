/** __________________________________________________________________________________
 * @format
 * @JAYD3V
 * @author A. Chambers - W3Dojo@gmail.com
 * @file "./source/"
 * @fileoverview
 * @license MIT
 * -----------------------------------------------------------------------------------  */

type ErrorMetaObj = {
    // Codebase Location
    class?: string;
    prop?: string;
    func?: string;
    method?: string;
    param?: string;
    var?: string;

    // Resource Location
    filename?: string;
    pathname?: string;
    URL?: string;
    URI?: string;
}

export default class E extends Error {
    meta?:ErrorMetaObj;

    constructor (type: string, brief: string, meta?:ErrorMetaObj) {
      super();
      this.message = brief;
      this.name = type;
      this.meta = meta;
    }
}
