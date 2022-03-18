import { isValidColorRef } from '../lib/control-seq-x16.js';
import { Test } from './lib/test-ifc.js';
import { deepEqual } from 'assert/strict';

const fnTest_isValidColorRef = new Test(
    {
      id   : 'Color Reference Validation Test',
      desc : {
        summary: 'Validation test for validating all possible arguments ' +
        'that can by used by the kernel Level graphic rendering ' +
        'function used by terminals',
        func: 'isValidColorRef'
      }
    },

    {
      operator      : deepEqual,
      expectedValue : true
    }
);

fnTest_isValidColorRef.dbgLog();

/* fnTest_isValidColorRef.genFuncTest_single(isValidColorRef,
    [
        {
          subId    : 'Red (std)',
          args     : 'red',
          expected : true
        },

        {
          subId    : 'Green (std)',
          args     : 'green',
          expected : true
        },

        {
          subId    : 'Yellow (std)',
          args     : 'yellow',
          expected : true
        },

        {
          subId    : 'Blue (std)',
          args     : 'blue',
          expected : true
        },

        {
          subId    : 'Magenta (std)',
          args     : 'magenta',
          expected : true
        },

        {
          subId    : 'Cyan (std)',
          args     : 'cyan',
          expected : true
        }
    ]
);

*/
