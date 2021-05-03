// from https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/

var sum = require('../sum');
var expect = require('chai').expect;

// begin test suite
describe('#sum', () => {
    // // add test hook
    // beforeEach(() => {
    //     // logic before each test is run
    // });

    // // test a functionality
    // it('should add numbers', () => {
    //     // add assertion
    //     expect(sum(1, 2, 3, 4, 5).to.equal(15));
    // });

    context('without arguments', () => {
        it('should return 0', () => {
            expect(sum()).to.equal(0);
        });
    });

    context('with numeric arguments', () => {
        it('should return sum of arguments', () => {
            expect(sum(1, 2, 3, 4, 5)).to.equal(15);
        });

        it('should return argument when only one argument is passed', () => {
            expect(sum(19)).to.equal(19);
        });
    });

    // wrap sum() call in function to test thrown error
    context('with non-number arguments', () => {
        it('should throw error', () => {
            expect(() => {
                sum(1, 2, '3', [4], 5)
            }).to.throw(TypeError, 'sum() expects only numbers.');
        });
    });

});