
import { deepStrictEqual, deepEqual, ok } from 'assert/strict';

type TestResult = {
    testLabel?: string | null;
    testDesc?: string | null;
    testId: string;
    expectedVal: any[] | any;
    returnedVal: any[] | any;
    succeeded: boolean;
    notes?: string[] | string | null;
};

type DeepStrictEquals = typeof deepStrictEqual;
type DeepEquals = typeof deepEqual;
type Equals = typeof ok;

export type TestMeta = {
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


type TestAssertion = {
    operator: DeepStrictEquals | DeepEquals | Equals;
    expectedValue: boolean;
};

type TestRoutines = {
    subId:string | number;
    args: any[] | any;
    expected: any;
}[]

export class Test {
    meta: TestMeta;
    assertion: TestAssertion;
    testMesg: string;

    constructor (meta: TestMeta, assertion: TestAssertion) {
      this.meta = meta;
      this.assertion = assertion;
      this.testMesg = this.generateMesg();
    }

    generateMesg () {
      let mesg = '\n\n EXECUTING TEST: ' + this.meta.id + '\n';

      mesg += this.meta.desc.func
        ? 'Function: ' + this.meta.desc.func
        : '';

      mesg += this.meta.desc.class
        ? 'Class: ' + this.meta.desc.func
        : '';

      mesg += this.meta.desc.method
        ? 'Method: ' + this.meta.desc.func
        : '';

      mesg += this.meta.desc.var
        ? 'Var: ' + this.meta.desc.func
        : '';

      mesg += this.meta.desc.pathname
        ? 'Pathname: ' + this.meta.desc.pathname
        : '';

      mesg += this.meta.desc.dir
        ? 'Directory: ' + this.meta.desc.func
        : '';

      mesg += this.meta.desc.file
        ? 'Filename: ' + this.meta.desc.func
        : '';

      mesg += this.meta.desc.file
        ? 'File: ' + this.meta.desc.func
        : '';

      mesg += this.meta.desc.file
        ? 'File: ' + this.meta.desc.func
        : '';

      return mesg;
    }

    genFuncTest_single (testFn: (arg: any)=> any, testRoutines: TestRoutines) {
      testRoutines.forEach((routine) => {
        const { args, subId, expected } = routine;
        const result = testFn(args);
        console.log('RESULT: ' + result);
      });
    }

    dbgLog () {
      const initMesg = '\n\t\t -------- DEBUG LOG --------\n';
      console.debug(initMesg + `\nPrinting Test Message: ${this.testMesg}`);
    }
}

