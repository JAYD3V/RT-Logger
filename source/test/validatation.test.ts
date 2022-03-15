
import { TextDeargumentrStream } from 'stream/web';
import { validateControlArg } from '../lib/control-seq-x16.js';

const numz = [
    1,  2,  3,  4,  5,  6,  7,  8,  9,  10,
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

type testParameters = {
    name      : string;
    argument  : number | string;
    shouldBe  : boolean;
    expecting : boolean;
}

type TestPayload = [testParameters]
// Test Parameters
export const validControlArgTest = {
    ctrlArgFg: <testParameters[]> [
        {
            name      : 'thirty',
            argument  : 30,
            shouldBe  : true,
            expecting : true
        },
        {
            name      : 'thirty-one',
            argument  : 31,
            shouldBe  : true,
            expecting : true
        },
        {
            name      : 'thirty-two',
            argument  : 32,
            shouldBe  : true,
            expecting : true
        },
        {
            name      : 'thirty-three',
            argument  : 33,
            shouldBe  : true,
            expecting : true
        },
        {
            name      : 'thirty-four',
            argument  : 34,
            shouldBe  : true,
            expecting : true
        },
        {
            name      : 'thirty-five',
            argument  : 35,
            shouldBe  : true,
            expecting : true
        },
        {
            name      : 'thirty-six',
            argument  : 36,
            shouldBe  : true,
            expecting : true
        },
        {
            name      : 'thirty-seven',
            argument  : 37,
            shouldBe  : true,
            expecting : true
        },
        {
            name      : 'thirty-eight',
            argument  : 38,
            shouldBe  : false,
            expecting : false
        },
        {
            name      : 'thirty-nine',
            argument  : 39,
            shouldBe  : true,
            expecting : true
        }
    ]
};

/*

        {
            name      : 'thirty-nine',
            argument  : 39,
            shouldBe  : true,
            expecting : true
        }
 */

const ctrlArgFg = validControlArgTest.ctrlArgFg;

function TestFn_validateCtrlArgs(testParameters: [testParameters])
{


}

function TEST_FN_$validateControlArg(){
    const FIVE = 55555;
    numz.forEach((num)=>{
        const result = validateControlArg(num);

        console.log(
            `\nTesting Func: 'validateControlArg(colorReference)'`);
        console.log(`Passing ${num} to Parameter 'colorReference'`);
        console.log(`\n\tFinal Result: ${result}`);
    });
}

export function testSuite(){
    console.log('INITIALIZING VALIDATION TEST SUITE...');
    console.log('Executing Control Argument Validation Test Subsuite.');

    TEST_FN_$validateControlArg();
}
