'use strict';

// padLeft we add symbols to the left but with "false" - change to the right
const padString = function (str, length, char = ' ', padLeft = false) {
  // Перевірка аргументів
  if (typeof str !== 'string' || typeof length !== 'number' || typeof char !== 'string' || typeof padLeft !== 'boolean') {
    return 'some error: invalid type of argument';
  }

  if (char.length !== 1) {
    return 'some error: char must be a single character';
  }

  if (length < 0) {
    return 'some error: length must be a non-negative number';
  }

  // cut the string, if his length is more than 'length'
  // f.e. "hello" and length equal 3, result will be "hel"
  if (str.length > length) {
    return str.substr(0, length);
  }

  // calculate number of chars to add to the string "paddingLength"
  const paddingLength = length - str.length;
  // create a string from chars "padding" repeating necessary number of chars
  const padding = char.repeat(paddingLength);

  // If the padLeft is true - add to the left side
  if (padLeft) {
    return padding + str;
  }
  // If the padLeft is false - add to the right side
  return str + padding;
};

// tests
console.log(padString('hello', 8, '*')); // 'hello***'
console.log(padString('hello', 6, '*', true)); // '*hello'
console.log(padString('hello', 2)); // 'he'




