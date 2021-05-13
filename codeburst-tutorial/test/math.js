// from https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e
var assert = require('chai').assert;

describe('#math()', function() {
    it('should multiply correctly', function() {
        assert.equal(3 * 3, 9);
    });

    it('should use order of operations', function() {
        assert.equal((3-4) * 8, -8);
    });
});
