/* Mock functions allow you to test links betw/code
    by erasing the actual implementation of a 
    functions, capturing calls to it, capturing
    instances of constructor functions, and allowing
    test-time configuration of return values

    You can mock functions by either 
        creating a mock function to use in test code,
        or writing a manual mock to override a
        module dependency
*/

// Mock function - we're implementing forEach
function forEach(items, callback) {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0,1], mockCallback);

test('mock function is called twice', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
});
test('first arg of first call to mock function is 0', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
});
test('first arg of second call to mock fn is 1', () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
});
test('return value of first call to mock fn is 42', () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
});

/*
    .mock property is where data (about how function
    was called) is kept. You can also inspect values
    of `this`.
*/
const myMock = jest.fn();

const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();

console.log(myMock.mock.instances);
// mock.instances is array of instances of function

// Mock fns can also inject values into code for tests
const myMock2 = jest.fn();
// undefined
console.log(myMock2()); 

myMock2.mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);
// 10, 'x', true, true
console.log(myMock2(), myMock2(), myMock2(), myMock2());

const filterTestFn = jest.fn();
// make mock return 'true' for first call, then 'false'
filterTestFn.mockReturnValueOnce(true)
        .mockReturnValue(false);
const filterTestResult = [11, 12]
    .filter(num => filterTestFn(num));
// [11]
console.log(filterTestResult);
// [ [11], [12] ]
console.log(filterTestFn.mock.calls);

/*
    Modules can be mocked w/ `jest.mock('module_name')`
    to avoid creating slow and fragile tests.
    We can use `mockResolvedValue` to return data
    that we are testing so we can test against the
    fake response.
*/

/*
    Mock implementations help when we want to define
    the default implementation of a mock fn made from
    another module.
*/
const mockImplementationExample = () => {
    const myMock3 = jest.fn(cb => cb(null, true));
    // true
    myMock3((err, val) => console.log(val));

    // foo.js is a module
    jest.mock('../foo');
    const foo = require('../foo');
    // foo is a mock function
    foo.mockImplementation(() => 42);
    // 42
    foo();    
}

// make fn calls produce different results
// w/ `mockImplementationOnce`

const myMock4 = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));
// true
myMock4((err, val) => console.log(val));
// false
myMock4((err, val) => console.log(val));

/*
    If mocked fns run out of implementations defined
    w/ `mockImplementationOnce`, it will execute the
    default one set w/ jest.fn, if defined.
*/
const myMock5 = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');
console.log(myMock5(), myMock5(), myMock5(), myMock5());

/*
    `.mockReturnThis() simplifies the need to return
    values of `this`.

    const myObj = {
        myMethod: jest.fn().mockReturnThis(),
    };

    is the same as

    const otherObj = {
        myMethod: jest.fn(function() {
            return this;
        }),
    };
*/

/*
    You can provide a name for your mock fn using
    `.mockName()`, which will be displayed instead
    of "jest.fn()"
*/
test('mock function is named in output', () => {
    const myMock6 = jest
        .fn()
        .mockReturnValue('default')
        .mockImplementation(x => 42 + x)
        .mockName('add42');
    // removing not will display "add42"
    expect(myMock6).not.toHaveBeenCalled();
});

/* Custom matchers:
    toHaveBeenCalled()
        expect(mFn.mock.calls.length).toBeGreaterThan(0)

    toHaveBeenCalledWith(arg1, arg2)
        expect(mFn.mock.calls).toContainEqual([arg1, arg2])

    toHaveBeenLastCalledWith(arg1, arg2)
        expect(mFn.mock.calls[mFn.mock.calls.length - 1])
            .toEqual([arg1, arg2])

    toMatchSnapshot() - check that a mock was invoked 
        the same number of times, in the same order,
        w/ same args. Also asserts on name.
        expect(mFn.mock.calls).toEqual([ [arg1, arg2] ])
        expect(mFn.getMockName()).toBe('add42')
*/

