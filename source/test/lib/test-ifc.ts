import { type } from 'os';
import { resourceLimits } from 'worker_threads';
import { TestFn_validateCtrlArgs } from '../validatation.test.js';

export type TestFnParameters = {
    [index: string]: any;
};

export type TestFn = (argz: TestFnParameters) => any;

export type TestMeta = {
    testID: string;
    description: string;
    shouldBe: boolean;
    expecting: boolean;
    testFn?: CallableFunction;
};

export type GroupTest = {
    [index: string]: TestMeta;
};

type TestResult = {
    testLabel?: string | null;
    testDesc?: string | null;
    testId: string;
    expectedVal: any[] | any;
    returnedVal: any[] | any;
    succeeded: boolean;
    notes?: string[] | string | null;
};

type TestGroupResults = {};

function x<Type>(){}

export class Test {

    constructor ( testArgs: TestMeta){}

    generateTest(testFn: (...argz: any)=> boolean){
        return ()=>{
            const result = testFn(null);
            return result;
        };
    }
}

