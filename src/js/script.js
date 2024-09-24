'use strict';

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const flat = function (arr) {
  // проверяю на количество аргументов
  if (arguments.length > 1) {
    throw new Error('Function accepts only 1 argument, too many arguments provided');
  }

  // проверяю, является ли переданный аргумент массивом
  if (!Array.isArray(arr)) {
    throw new Error('Function accepts only an array');
  }

  // объявление результирующего массива
  const result = [];

  // функция для рекурсивного обхода массива
  const flatten = function (currentArray) {
    for (const item of currentArray) {
      if (Array.isArray(item)) {
        // если элемент - массив, рекурсивно копирую его
        flatten(item);
      } else {
        // если элемент не массив, добавляю его в результат
        result.push(item);
      }
    }
  };

  // вызываю функции для обхода
  flatten(arr);

  return result; // возвращаю новый массив
};

console.log(flat(complexArray)); // одномерный массив из многомерного
console.log(flat([1, 2, 3])); // полная копия одномерного массива
