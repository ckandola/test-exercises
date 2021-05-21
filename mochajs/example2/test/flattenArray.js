// `describe.only()` ensures only these tests run
// applies to `it()` as well

describe/* .only */('#flattenArray()', () => {
    // pending, since it() has no second arg
    it/* .only */('should flatten an array', () => {

    });

    // will not run
    it('should recursively flatten array', () => {

    });
});

// will not run
describe('#mergeArray()', () => {
    it('should merge two arrays', () => {});
});

/* 
    This test is skipped at runtime for production
    environment.
    In production, it will not run and will be marked
    as pending.
*/

describe/* .only */('#mergeOtherArray', () => {
    it('should merge two arrays', function() {
        // must use `function() {` here
        if (process.env.NODE_ENV === 'production') {
            return this.skip();
            /*
                Aborts test. Avoid executing further 
                instructions after this call. Every
                test using this will be marked as
                pending.

                Run w/
                    in package.json, enter:
                    `cross-env NODE_ENV=production` 
                    `npm test`
            */
        }
    });
});
