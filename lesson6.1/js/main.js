'use strict'
function testArg (a) {
  a = a || undefined || 0 || 6
  console.log(a)
}
testArg(6)
const matrix2 = []
const size = 10
const lastIndex = size - 1;
for (let i = 0; i < size; i++) {
  matrix2[i] = [];
  for (let j = 0; j < size; j++) {
    if (i === j) {
      matrix2[i][j] = 1;
    } else if (i === (lastIndex - j) ) {
      matrix2[i][j] = 2;
    } else if (i < j && i <= lastIndex - j) {
      matrix2[i][j] = 3;
    } else if (i > j && j <= lastIndex - i) {
      matrix2[i][j] = 6;
    } else if (i > j && j <= lastIndex + j) {
      matrix2[i][j] = 5;
    } else if (i < j && j <= lastIndex + i) {
      matrix2[i][j] = 4;
    } else matrix2[i][j] = "x";
  }
}
console.log(matrix2);
function sequence (start= 0, step= 1) {
  let s = start - step;
  return function () {
    return s += step;
  };
}
let generator = sequence(10, 3);
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());

function take (gen, x) {
  const resArray = []
  for(let i = 0; i < x; i++) {
    resArray.push(gen())
  }
  return resArray;
}
let gen2 = sequence(0, 2);
console.log(take(gen2, 5))

function correctPolishLetters (string) {
  let resStr = string;
  let letters = {'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' }
  for(let letter in letters) {
    resStr = resStr.replace(letter, letters[letter])
  }
  return resStr
}

console.log(correctPolishLetters('Jędrzej Błądziński'))
