// run w/ `npm test -- -f promiseMd5` 
/* `--` is a pipe,  `-f` flag will only run tests
     containing given (promiseMd5) string
*/

var promiseMd5 = require('../promise-md5');
var expect = require('chai').expect;

describe('#promiseMd5()', () => {
    context('with string argument', () => {
        it('should compute MD5 hash', () => {
            return promiseMd5('Glad Chinda')
                .then(hash => {
                    expect(hash)
                        .to.be.a('string')
                        .that.matches(/^[a-f0-9]{32}$/)
                        .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');
                });
        });
    });

    context('with non-string argument', () => {
        it('should throw an errow', () => {
            return promiseMd5(12345)
            .catch(err => {
                expect(() => {throw err})
                .to.throw(TypeError, 'The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView');
            });
        });
    });
});
