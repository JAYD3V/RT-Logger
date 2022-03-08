/** __________________________________________________________________________________
 * @format
 * @JAYD3V
 * @author A. Chambers - W3Dojo@gmail.com
 * @file "./source/"
 * @fileoverview
 * @license MIT
 * -----------------------------------------------------------------------------------  */
declare type ErrorMetaObj = {
    class?: string;
    prop?: string;
    func?: string;
    method?: string;
    param?: string;
    var?: string;
    filename?: string;
    pathname?: string;
    URL?: string;
    URI?: string;
};
export default class E extends Error {
    meta?: ErrorMetaObj;
    constructor(type: string, brief: string, meta?: ErrorMetaObj);
}
export {};
//# sourceMappingURL=err.d.ts.map