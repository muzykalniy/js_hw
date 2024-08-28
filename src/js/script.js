'use strict';

const charactersInput = prompt('Enter random number of characters:');
const numberInput = +prompt('Enter random number of symbols:');

const generateKey = function (length, characters) {
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};
const key = generateKey(numberInput, charactersInput);
console.log(key);
