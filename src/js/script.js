'use strict';

/* ======================================================================
 Task 1 Вивести на сторінку в один рядок через кому числа від 10 до 20. */

let result1 = '';
for (let i = 10; i <= 20; i++) {
  result1 += `${i} `;
}
console.log('Numbers between 10 and 20:', result1.trim());

/* result1 += `${i} `;
или result1 += i + ''; `
Внутри цикла мы добавляем к переменной result1 текущее значение i и пробел.

`${i} `: Это означает "возьми значение i, преврати его в строку и добавь пробел".
Например, если i равно 10, получится "10 ".
result1 +=: Это добавляет новую строку к уже существующей в result1. */


/* ======================================================================
Task 2 Вивести квадрати чисел від 10 до 20. */

let result2 = '';
for (let i = 10; i <= 20; i++) {
  const square = i ** 2;
  result2 += `${square} `;
}
console.log('The squares of numbers from 10 to 20:', result2.trim());

/* ======================================================================
 Task 3 Вивести таблицю множення на 7. */
let multiplyString = '';

for (let i = 0; i <= 10; i++) {
  /* Внутри цикла мы берём текущее число i и умножаем его на 7.
 Результат умножения сохраняем в коробке под названием result3  */

  const result3 = i * 7;

  /* Мы берём число i, результат умножения и записываем это в строку.
  Строка будет выглядеть, например, так: "0 * 7 = 0"
  Добавляем эту строку в нашу коробку multiplyString.
  Каждый раз, когда мы добавляем новую строку, она добавляется в конец коробки. */

  multiplyString += `${i} * 7 = ${result3}\n`;
}
// Создаёт строку с текущими значениями и результатом умножения.
console.log(multiplyString);


/* ======================================================================
Task 4 Знайти суму всіх цілих чисел від 1 до 15. */

let sum1 = 0; // создал переменную куда буду суммировать
for (let i = 1; i <= 15; i++) {
  sum1 += i;
}
console.log('Sum of all integer numbers from 1 to 15:', sum1);

/* ======================================================================
Task 5 Знайти добуток усіх цілих чисел від 15 до 35. */

let multiply = 1;
for (let i = 15; i <= 35; i++) {
  multiply *= i;
}
console.log('Multiply integer numbers from 15 to 35:', multiply);

/* ======================================================================
 Task 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500. */

let sum2 = 0;
for (let i = 1; i <= 500; i++) {
  sum2 += i;
}
const average = sum2 / 500;

console.log('Average of numbers from 1 to 500:', average);

/* ======================================================================
 Task 7 Вивести суму лише парних чисел в діапазоні від 30 до 80.
*/
let sum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log('Sum of paired numbers from 30 to 80:', sum);

/* ======================================================================
 Task 8 Вивести всі числа в діапазоні від 100 до 200 кратні 3. */

let result3 = '';
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    result3 += `${i} `;
  }
}
console.log('all numbers in the range from 100 to 200 that are divisible by 3:', result3.trim());

/* ======================================================================
Task 9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
 Task 10 Визначити кількість його парних дільників.
 Task 11 Знайти суму його парних дільників. */

const numPrompt = prompt('Enter your number:');
const num = Number(numPrompt);

// строка для всех делителей
let result4 = '';
// строка для четных делителей
let result5 = '';
// переменная для суммирования парных делителей
let sumEvenDiv = 0;

// для task 10 делаю переменную-счетчик для четных делителей
let evenDivisorCount = 0;

// Перебираем числа от 1 до самого введенного числа
for (let i = 1; i <= num; i++) {
  // Проверяем делится ли само число без остатка
  if (num % i === 0) {
    result4 += `${i} `;

    // task 10 проверяю четный ли делитель
    if (i % 2 === 0) {
      result5 += `${i} `;
      // если четный, то увеличиваю счетчик на 1
      evenDivisorCount++;
      // task 11 суммирую делители
      sumEvenDiv += i;
    }
  }
}

// Вывожу  делители task 9
console.log(`All divisors of ${num}: ${result4.trim()}`);
// Вывожу четные делители и их кол-во  task 10
console.log(`All even divisors of ${num}: ${result5}\nNumber of even divisors of ${num}: ${evenDivisorCount};`);
// Суммирую четные делители числа task 11
console.log(`Sum of all even divisors of number ${num}: ${sumEvenDiv} `);


/* ======================================================================
Task 12 Надрукувати повну таблицю множення від 1 до 10. */

// строка для хранения все таблицы умножения
let stringMultNum = '';

/* Внешний цикл для множителей от 1 до 10  - второй множитель,
чтобы вручную не писать для умножения на 1, 2, 3 и тд */
for (let multiplier = 1; multiplier <= 10; multiplier++) {
  // тут уже делаю внутренний цикл с шагом от 0 до 10 - первый множитель
  for (let i = 0; i <= 10; i++) {
    const multResult = i * multiplier;
    // тут начинаю записывать в строчку, делая абзац после каждой
    stringMultNum += `${i} * ${multiplier} = ${multResult}\n`;
  }
  // абзац после каждой таблицы
  stringMultNum += '\n';
}

console.log(stringMultNum);
