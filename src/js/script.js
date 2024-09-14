'use strict';

// при hoisting все переменные, константы и функции поднимаются физически вверх
// переменные и константы, объявленные внутри функции, поднимаются только внутри области видимости этой функции.

const func = () => {
  for (let i = 0; i < 3; i++) {
    var varVariable = 'it is var'; // var имеет функциональную область видимости, доступен вне цикла, но внутри функции
    let letVariable = 'it is let'; // let имеет блочную область видимости, доступен только внутри цикла for
    const constVariable = 'it is const'; // const имеет блочную область видимости, доступен только внутри цикла for
    console.log(varVariable); // выводит 'it is var'
    console.log(letVariable); // выводит 'it is let'
    console.log(constVariable); // выводит 'it is const'
  }
  console.log(varVariable); // выводит 'it is var', так как var доступен за пределами цикла, но внутри функции
  console.log(letVariable); // ошибка: letVariable is not defined, так как let доступен только внутри цикла
  console.log(constVariable); // ошибка: constVariable is not defined, так как const доступен только внутри цикла
};

const res = func();
console.log(res); // выводит undefined, так как функция func ничего не возвращает


