'use strict';


// Task 1

const array = [1, 'hello', 25, null, 25, 46, undefined, 24, 'world'];

const averageFunc = function (arr) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result += arr[i];
      count++;
    }
  }
  return count > 0 ? result / count : 0; // если чисел нет в массиве, возвращаю 0
};
const average = averageFunc(array);
console.log(`Average number is ${average}`);


// Task 2

const numInput1 = prompt('Enter your first number:');
const numInput2 = prompt('Enter your second number:');
const operatorInput = prompt('Enter operator:');

const doMath = function (x, znak, y) {
  if (x !== null && x.trim() !== '' && !isNaN(x)
    && y !== null && y.trim() !== '' && !isNaN(y)
    && znak !== null && znak.trim() !== '') {
    x = Number(x);
    y = Number(y);
    const znakOperator = {
      '+': (x, y) => x + y,
      '-': (x, y) => x - y,
      '*': (x, y) => x * y,
      '/': (x, y) => x / y,
      '%': (x, y) => x % y,
      '^': (x, y) => x ** y,
    };
    if (znakOperator[znak]) {
      if (y === 0) { return 'Division by 0'; }
      return znakOperator[znak](x, y);
    } return 'Invalid operator. Please use one of: +, -, *, /, %, ^';
  } return 'Invalid input. Please enter valid numbers and operator.';
};
const math = doMath(numInput1, operatorInput, numInput2);
console.log(`Result: ${math}`);

// Task 3

