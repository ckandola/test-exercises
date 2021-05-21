describe('#slowtest()', function() {
    // test is considered slow after 1 sec
    this.slow(1000);
    
    // completes after specified 1 sec elapsed
    // will be red to indicate it was slow
    it('should be complete in a second', done => {
        setTimeout(done, 1500);
    });

    // completes immediately
    it('should be complete immediately', () => {
        
    });
});

/*
    Mocha will timeout for any test that takes more
    than 2 seconds to run completely. After timeout,
    test is marked as failed and timeout error is 
    thrown.

    `this.timeout()` specifies amount of time that
    should elapse before a timeout happens for given
    test suite, hook, or test case.
*/

describe('#timeouts()', function() {
    this.timeout(5000);

    before('some long setup', function(done) {
        // hook-level timeout
        this.timeout(2500);
        setTimeout(done, 2250);
    });

    it('should take less than 200ms', function(done) {
        // set test-level timeout
        this.timeout(200);

        setTimeout(done, 150);
    });

    /* // this will fail
    it('should run 6 secs', function(done) {
        setTimeout(done, 6000);
    }); */

    /*
        run `npm test -- -h` for all available options

    */
});
