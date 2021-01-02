function polybius(input, encode = true) {
  let alphabet = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', '(i/j)', 'k'],
    ['l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z'],
  ];

  if (encode === true) {
    return input
      .split('')
      .map((char) => {
        for (let i = 0; i < alphabet.length; i++) {
          for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[i][j].includes(char.toLowerCase())) {
              return `${j + 1}${i + 1}`;
            }
            if (char === ' ') {
              return char;
            }
          }
        }
      })
      .join('');
  }

  if (encode === false) {
    if (input.split(' ').join('').length % 2 !== 0) {
      return false;
    } else {
      let result = '';
      let x = 0;
      let y = 0;
      for (let i = 0; i < input.length; i += 2) {
        y = parseInt(input[i]) - 1;
        x = parseInt(input[i + 1]) - 1;
        if (y % 1 !== 0) {
          result += input[i];
          y = x;
          x = parseInt(input[i + 2] - 1);
          result += alphabet[x][y];
          i++;
        } else {
          result += alphabet[x][y];
        }
      }
      return result;
    }
  }
}

module.exports = polybius;
