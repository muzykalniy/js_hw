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

// parseInt превращает 3 в настоящее число в 10тичной системе счисления
const arrayRows = parseInt(prompt('Enter number of rows:'), 10);
const arrayCols = parseInt(prompt('Enter number of columns:'), 10);
// создал основной массив
const arrayMain = [];
// Функция для заполнения массива данными от пользователя
const arrayFunc = function (rows, cols) {
  // проверка
  if (isNaN(rows) || rows <= 0 || isNaN(cols) || cols <= 0) {
    alert('Invalid input. Please enter positive numbers for rows and columns.');
    return;
  }
  // заполняю основной массив
  for (let i = 0; i < rows; i++) {
    arrayMain[i] = []; // создал внутренний массив для текущей строки и начинает цикл его заполнять
    // внутренний цикл для заполнения колонок
    for (let j = 0; j < cols; j++) {
      // Запрашиваем значение для каждого элемента массива
      const value = prompt(`Enter value for element [${i}][${j}]:`);
      arrayMain[i][j] = value; // Сохраняем значение в основной массив
    }
  }
};
arrayFunc(arrayRows, arrayCols);
console.log(arrayMain);


// Task 4

const stringInput = prompt('Enter string:');
const symbolInput = prompt('Enter symbols:');
let newStr = '';

const deleteSymbol = function (str, arr = ['sym1', 'sym2']) {
  for (let i = 0; i < str.length; i++) {
    /* includes - метод для проверки содержится ли символ строки в массиве символов на удаление
     если текущий символ str[i] не содержится в массиве arr, добавляю его в новую строку newStr
     если содержится - то вернет false и цикл пропустить этот символ */
    if (!arr.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
};
// symbolInput.split('') преобразует строку символов, которые нужно удалить, в массив символов.
const func = deleteSymbol(stringInput, symbolInput.split(''));
console.log(func);
