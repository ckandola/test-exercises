var md5 = require('../md5');
var expect = require('chai').expect;

describe('#md5()', () => {

    context('with string argument', () => {
        it('should compute MD5 hash', done => {
            md5('Glad Chinda', (err, hash) => {
                if (err) {
                    return done(err);
                }

                expect(hash).to.be.a('string')
                    .that.matches(/^[a-f0-9]{32}$/)
                    .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');
                
                done();
            });
        });
    });

    context('with non-string argument', () => {
        it('should throw an error', done => {
            md5(12345, (error, hash) => {
                if (error) {

                    expect(() => {
                        throw error
                    }).to.throw(TypeError, 'The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView');

                    return done();
                }

                done();
            });
        });
    });
});

/*
    done() callback:
        - must be called for Mocha.js to terminate the test and to
          proceed to the next test. Else runs until timeout.
        - Should not be called more than once within an it() block. 
*/
