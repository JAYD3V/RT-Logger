
import {
    TestMeta as Test,
    TestFn,
    TestFnParameters,
    GroupTest
} from './lib/test-ifc.js';

import { validateControlArg } from '../lib/control-seq-x16.js';

const numz = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];

const testDesc = 'Test whether or not Control Arguments are being ' +
'generated correctly';


export function TestFn_validateCtrlArgs(arg: TestFnParameters = { num: 0 }){
    return function(){
        const result = validateControlArg(arg.num);
        console.log(`Fn Test: ValidateCtrlArgs\nResult: ${result}`);
        return result;
    };
}

const ControlArgsTest:Test = {
    testID      : 'control-argument-validation-test',
    description : testDesc,
    expecting   : true,
    shouldBe    : true,
    testFn      : TestFn_validateCtrlArgs
};
