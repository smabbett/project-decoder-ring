function caesar(input, shift, encode = true) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
  } else {
    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        let char = input[i].toLowerCase();

        if (alphabet.indexOf(char) > -1) {
          let newIndex = alphabet.indexOf(char) + shift;
          if (newIndex < alphabet.length) {
            result += alphabet[newIndex];
          } else {
            let shiftedIndex = -(alphabet.length - newIndex);
            result += alphabet[shiftedIndex];
          }
        } else {
          result += char;
        }
      }
      return result;
    } else {
      for (let i = 0; i < input.length; i++) {
        let char = input[i].toLowerCase();

        if (alphabet.indexOf(char) > -1) {
          let newIndex = alphabet.indexOf(char) - shift;
          if (newIndex < alphabet.length && newIndex >= 0) {
            result += alphabet[newIndex];
          } else {
            let shiftedIndex = alphabet.length + newIndex;
            result += alphabet[shiftedIndex];
          }
        } else {
          result += char;
        }
      }
      return result;
    }
  }
}

module.exports = caesar;
