const expect = require('chai').expect;
const polybius = require('../src/polybius.js');

describe('polybius', () => {
  it('when decoding, if the number of characters in the string excluding spaces is not even, return false', () => {
    expect(polybius('44324233521254134', false)).equal(false);
  });
  it('when the input is a string, encode is false, correctly decodes a string', () => {
    expect(polybius('32', false)).equal('h');
    expect(polybius('51', false)).equal('e');
    expect(polybius('3251', false)).equal('he');
    expect(polybius('3251131343 2543241341', false)).equal('hello world');
    expect(polybius('4432423352125413', false)).equal('th(i/j)nkful');
  });
  it('when the input is a string, encode is true, correctly encodes a string', () => {
    expect(polybius('th')).equal('4432');
    expect(polybius('thinkful')).equal('4432423352125413');
    expect(polybius('Hello world')).equal('3251131343 2543241341');
  });
});
