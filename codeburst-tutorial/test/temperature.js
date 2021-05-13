var assert = require('chai').assert;
let convert = require ('../temperature');
const {cToF, fToC} = convert;

describe('#Temperature Conversion', function() {
    describe('Celsius to Fahrenheit', function() {
        it('converts 0C to 32F', function() {
            assert.equal(cToF(0), 32);
        });
        it('converts -40C to -40F', function() {
            assert.equal(cToF(-40), -40);
        });
        it('converts 100C to 212F', function() {
            assert.equal(cToF(100), 212);
        });
        it('should return undefined with no input', function() {
            assert.equal(cToF(), undefined);
        });
    });

    describe('Fahrenheit to Celsius', function() {
        it('converts 32F to 0C', function() {
            assert.equal(fToC(32), 0);
        });
        it('converts -40F to -40C', function() {
            assert.equal(fToC(-40), -40);
        });
        it('converts 212F to 100C', function() {
            assert.equal(fToC(212), 100);
        });
        it('should return undefined with no input', function() {
            assert.equal(fToC(), undefined);
        });
    });
});
