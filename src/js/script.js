'use strict';

const mainFunction = function (callback, callbackMultiply, callbackDivision, callbackModulo) {
  const num1Input = prompt('Enter first number:');
  const num2Input = prompt('Enter second number:');
  const num1 = Number(num1Input);
  const num2 = Number(num2Input);
  callback(num1, num2);
  callbackMultiply(num1, num2);
  callbackDivision(num1, num2);
  callbackModulo(num1, num2);
};

const exponentiation = function (num1, num2) {
  const numPower = num1 ** num2;
  return alert(`${num1} to the power of ${num2} is ${numPower}`);
};

// Додаткові завдання
// 1
const multiply = function (num1, num2) {
  const numMultiplier = num1 * num2;
  const message1 = `${num1} * ${num2} is equal to ${numMultiplier}`;
  alert(message1);
  console.log(message1);
};

// 2

const division = function (num1, num2) {
  if (num2 === 0) {
    alert('You are dividing by 0');
    console.log('You are dividing by 0');
    return; // Завершаем выполнение функции
  }

  const numDivision = num1 / num2;
  const roundedDivision = numDivision.toFixed(2);
  const message2 = `${num1} / ${num2} is equal to ${roundedDivision}`;
  alert(message2);
  console.log(message2);
};

// 3

const modulo = function (num1, num2) {
  if (num2 === 0) {
    alert('You are dividing by 0');
    console.log('You are dividing by 0');
    return;
  }
  const numModulo = num1 % num2;
  const message3 = `The rest of ${num1} % ${num2} is equal to ${numModulo}`;
  alert(message3);
  console.log(message3);
};



mainFunction(exponentiation, multiply, division, modulo);







