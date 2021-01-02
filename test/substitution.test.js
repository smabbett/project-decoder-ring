const expect = require('chai').expect;

const substitution = require('../src/substitution.js');
describe('substitution', () => {
  it('when alphabet is not 26 characters in length, return false', () => {
    expect(substitution('thinkful', 'short')).equal(false);
  });
  it('when alphabet is not 26 unique characters, return false', () => {
    expect(substitution('thinkful', 'abcabcabcabcabcabcabcabcyz')).equal(false);
  });
  it('when input is a string, alphabet is a string, correctly encodes a string using alphabet', () => {
    expect(substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev')).equal(
      'jrufscpw'
    );
    expect(
      substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev')
    ).equal('elp xhm xf mbymwwmfj dne');
  });
  it('when input is a string, alphabet is a string, correctly decodes a string using alphabet', () => {
    expect(substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false)).equal(
      'thinkful'
    );
  });
});
