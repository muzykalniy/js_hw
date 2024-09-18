'use strict';

// 1
const getFactorial = (num) => {
  if (num === 1 || num === 0) return 1;
  return num * getFactorial(num - 1);
  // доходим вниз до конечного результата выхода 1 и начинаем подниматься вверх, опираясь на это значение
};
const res1 = getFactorial(3);
console.log('Factorial of 3:', res1);

// 2
const pow = (num, degree) => {
  if (degree === 0) return 1;
  return num * pow(num, degree - 1);
  // доходим до степени 0, которая возвращает 1 и поднимаемся вверх опираясь на результат с прошлого шага
};
const res2 = pow(3, 2);
console.log('3 to the power of 2:', res2);

// 3

const recursiveSum = (a, b) => {
  if (b === 0) {
    return a;
  }
  // увеличиваю первое число на 1 пока второе уменьшаю до 0
  // будет "спуск" до recursiveSum(8, 0) вернет 8 (а=8) и пойдет вверх до recursiveSum(5, 3)
  return recursiveSum(a + 1, b - 1);
};
const res3 = recursiveSum(5, 3);
console.log('Sum of 5 and 3', res3);


