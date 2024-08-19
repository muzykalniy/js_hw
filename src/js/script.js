'use strict';

// Task 1

let numString = '';

for (let i = 20; i <= 30; i += 0.5) {
  numString += `${i} `;
}
console.log('Numbers from 20 to 30 with step 0.5:', numString.trim());


// Task 2
const dollarCurrency = 27;
let result1 = '';
for (let i = 10; i <= 100; i += 10) {
  const grivnaCurrency = dollarCurrency * i;
  result1 += `${i}$ equals ${grivnaCurrency} UAH\n`;
}
console.log(`Counting 1$ values ${dollarCurrency} UAH:\n${result1}`);

// Task 3

const numIntPrompt1 = prompt('Enter your integer number:');
const numInt1 = Number(numIntPrompt1);

if (isNaN(numInt1)) {
  console.log('Please enter a valid integer number.');
} else {
  let result2 = '';

  for (let i = 1; i <= 100; i++) {
    // каждое последуюзее число позвожу в квадрат
    const numSqr = i ** 2;
    // проверяю условие на неравенство с введенным числом ранее
    if (numSqr <= numInt1) {
      // записываю в строчку
      result2 += `${i} `;
    }
  }
  console.log(`Output all integers from 1 to 100 whose squares do not exceed ${numIntPrompt1}:\n${result2.trim()}`);
}

// Task 4

const numIntPrompt2 = prompt('Enter an integer number:');
const numInt2 = Number(numIntPrompt2);

// создаем переменную и допускаем что число простое, не имеет делителей кроме 1 и самого себя
let isPrime = true;

// проверяем введенное число
if (numInt2 <= 1) {
  // если меньше или равно, то меняем значение isPrime на false
  isPrime = false;
} else {
  // дальше идем проверять от 2ки
  for (let i = 2; i < numInt2; i++) {
    // проверяем делится ли без остатка на текущее число в цикле i
    if (numInt2 % i === 0) {
      // если ровно делится, то оно не простое, меняем значение на false
      isPrime = false;
      // прекращаем проверять так как знаем что число уже не простое
      break;
    }
  }
}
if (isPrime) {
  console.log(`${numInt2} is a prime number.`);
} else {
  console.log(`${numInt2} is not a prime number.`);
}

// Task 5

const numIntPrompt3 = prompt('Enter an number:');
const num = Number(numIntPrompt3);
// надо начать с числа 1, так как это 3 в степени 0
let powerOfThree = 1;
// будет показывать найдено ли число, которое можно получить, возведя 3 в степень.
let isPowerOfThree = false;

// начинаем цикл, будем проверять числа, которые можно получить, возводя 3 в разные степени
while (powerOfThree <= num) {
  /* Мы проверяем, равно ли текущее значение powerOfThree введённому числу.
  Если да, то число можно получить, возведя 3 в степень, и мы должны сообщить об этом. */
  if (powerOfThree === num) {
    /* Если мы нашли подходящее число, мы изменяем isPowerOfThree на true,
    чтобы показать, что число можно получить. */
    isPowerOfThree = true;
    // выходим из цикла
    break;
  }
  /* Если текущее значение powerOfThree не равно введённому числу, мы умножаем его на 3, чтобы проверить следующую степень.
  Например, если powerOfThree было 1, оно станет 3; если было 3, станет 9, и так далее. */
  powerOfThree *= 3;
}
// После завершения цикла мы проверяем, изменилось ли isPowerOfThree на true.
if (isPowerOfThree) {
  console.log(`${num} can be obtained by raising 3 to some power.`);
} else {
  console.log(`${num} cannot be obtained by raising 3 to any power.`);
}
