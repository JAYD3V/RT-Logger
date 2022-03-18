/// <reference types="node" resolution-mode="require"/>
import { deepStrictEqual, deepEqual, ok } from 'assert/strict';
declare type DeepStrictEquals = typeof deepStrictEqual;
declare type DeepEquals = typeof deepEqual;
declare type Equals = typeof ok;
export declare type TestMeta = {
    id: string;
    desc: {
        summary: string;
        func?: string;
        class?: string;
        method?: string;
        var?: string;
        pathname?: string;
        file?: string;
        dir?: string;
        URI?: string;
        URL?: string;
    };
    mesg?: {
        onStart?: string;
        onExit?: string;
        onErr?: string;
    };
};
declare type TestAssertion = {
    operator: DeepStrictEquals | DeepEquals | Equals;
    expectedValue: boolean;
};
declare type TestRoutines = {
    subId: string | number;
    args: any[] | any;
    expected: any;
}[];
export declare class Test {
    meta: TestMeta;
    assertion: TestAssertion;
    testMesg: string;
    constructor(meta: TestMeta, assertion: TestAssertion);
    generateMesg(): string;
    genFuncTest_single(testFn: (arg: any) => any, testRoutines: TestRoutines): void;
    dbgLog(): void;
}
export {};
//# sourceMappingURL=test-ifc.d.ts.map