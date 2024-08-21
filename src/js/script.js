'use strict';

// input characters = abcdefghijklmnopqrstuvwxyz0123456789
// input number = 16

const charactersInput = prompt('Enter random number of characters:');
const numberInput = +prompt('Enter random number of symbols:');

const generateKey = function (length, characters) {
  // create string for input of characters
  let result = '';

  // create loop to be repeated until 'i' will reach the number of 'length' string we want
  for (let i = 0; i < length; i++) {
    /* Math.random() - generate random number from 0 to 1 (0.65)
    characters.length - gives us number of characters in input string's length (16)
    Math.random() * characters.length - multiplies random number to string's length (0.65*16)
    Math.floor - rounds this number down to the nearest integer
    to get random index of char in the string (10.4 rounded 10) */
    const randomIndex = Math.floor(Math.random() * characters.length);

    // characters[randomIndex] chooses char from the string 'characters' using random generated index
    result += characters[randomIndex];
  }
  return result;
};
const key = generateKey(numberInput, charactersInput);
console.log(key);
