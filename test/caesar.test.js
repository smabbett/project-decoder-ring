const expect = require('chai').expect;

const caesar = require('../src/caesar.js');
describe('caesar', () => {
  it('when the input is a string, correctly encodes string', () => {
    expect(caesar('thinkful', 3)).equal('wklqnixo');
    expect(caesar('thinkful', -3)).equal('qefkhcri');
    expect(caesar('This is a secret message!', 8)).equal(
      'bpqa qa i amkzmb umaaiom!'
    );
  });

  it('if the shift value is 0 or out of range, returns false', () => {
    expect(caesar('thinkful')).equal(false);
    expect(caesar('thinkful', 99)).equal(false);
    expect(caesar('thinkful', -26)).equal(false);
  });

  it('when the input is a string, correctly decodes a string', () => {
    expect(caesar('wklqnixo', 3, false)).equal('thinkful');
    expect(caesar('BPQA qa I amkzmb umaaiom!', 8, false)).equal(
      'this is a secret message!'
    );
  });
});
