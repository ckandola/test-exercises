// from https://javascript.info/testing-mocha

var assert = require('chai').assert;
var pow = require('../pow');

describe('#pow()', function() {
    
    describe('raises to the power of 3', () => {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} to the power of 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }
        
        for (let i = 1; i <= 5; i++) {
            makeTest(i);
        }
    });

    describe('handles invalid values of n', () => {
        it('for negative n, the result is NaN', function() {
            assert.isNaN(pow(2, -1));
        });

        it('for non-integer n, the result is NaN', function() {
            assert.isNaN(pow(2, 1.5));
        })
    });
});
