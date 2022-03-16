import { Test } from './lib/test-ifc.js';

const test = new Test({
    testID      : 'TestTest',
    description : '',
    expecting   : true,
    shouldBe    : true,
    testFn      : (argz = { foo: 'apple' }) => {
        const foobar = argz.foo + 'a';
        return foobar;
    }
}
);
