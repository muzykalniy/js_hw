'use strict';

// Task 1 Вивести на сторінку в один рядок через кому числа від 10 до 20.

let result1 = '';
for (let i = 10; i <= 20; i++) {
  result1 += `${i} `;
}
console.log(result1.trim());

/* result1 += `${i} `;
или result1 += i + ''; `
Внутри цикла мы добавляем к переменной result1 текущее значение i и пробел.

`${i} `: Это означает "возьми значение i, преврати его в строку и добавь пробел".
Например, если i равно 10, получится "10 ".
result1 +=: Это добавляет новую строку к уже существующей в result1.
*/

// Task 2 Вивести квадрати чисел від 10 до 20

let result2 = '';
for (let i = 10; i <= 20; i++) {
  const square = i ** 2;
  result2 += `${square} `;
}
console.log(result2.trim());

// Task 3 Вивести таблицю множення на 7.

for (let i = 0; i <= 10; i++) {
  const result3 = i * 7;
  // Создаёт строку с текущими значениями и результатом умножения.
  console.log(`${i} * 7 = ${result3}`);
}

// Task 4 Знайти суму всіх цілих чисел від 1 до 15.

let sum1 = 0; // создал переменную куда буду суммировать
for (let i = 0; i <= 15; i++) {
  sum1 += i;
}
console.log('Sum of all integer numbers from 1 to 15:', sum1);

// Task 5 Знайти добуток усіх цілих чисел від 15 до 35.

let multiply = 1;
for (let i = 15; i <= 35; i++) {
  multiply *= i;
}
console.log('Multiply integer numbers from 15 to 35:', multiply);

// Task 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum2 = 0;
for (let i = 1; i <= 500; i++) {
  sum2 += i;
}
const average = sum2 / 500;

console.log('Average of numbers from 1 to 500:', average);

// Task 7 Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log('Sum of paired numbers from 30 to 80:', sum);
