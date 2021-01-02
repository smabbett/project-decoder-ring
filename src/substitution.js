function substitution(input, alphabet, encode = true) {
  let standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  if (alphabet.length !== 26) {
    return false;
  } else {
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) {
        return false;
      }
    }
  }
  if (encode === true) {
    for (let i = 0; i < input.length; i++) {
      let j = standardAlphabet.indexOf(input[i].toLowerCase());
      if (j < 0) {
        result += input[i];
      } else {
        result += alphabet[j];
      }
    }

    return result;
  } else {
    for (let i = 0; i < input.length; i++) {
      let j = alphabet.indexOf(input[i].toLowerCase());
      if (j < 0) {
        result += input[i];
      } else {
        result += standardAlphabet[j];
      }
    }
    return result;
  }
}

module.exports = substitution;
