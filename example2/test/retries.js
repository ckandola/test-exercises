const fetch = require('node-fetch');

describe('test medium site', function() {
    this.retries(2);
    // all failed tests in this will retry twice

    it('should load medium homepage', async function() {
        this.retries(5);
        // can only retry this test 5 times
        await fetch('https://medium.com');
    });
});
