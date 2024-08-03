'use strict';

// Task #1

const name  = prompt('Enter your name');
const age = prompt('Enter your age');
const likesProgramming = confirm('Do you like programming?');

// Task #2
console.log(name, typeof name);
console.log(age, typeof age);
console.log(likesProgramming, typeof likesProgramming);

// Task #3
const greeting = `Hello, ${name}`;
alert(greeting);

// Task #4
const numericAge = Number(age);
const nextAge = numericAge + 1;
console.log(nextAge);

// Task #5

// Стрелочная с тернарным оператором
const isAdult = (age) => age >= 18 ? 'True' : 'False';
console.log(isAdult(numericAge));






/* С объявлением конкретной переменной
const numericAge = 27;
const isAdult = numericAge >= 18 ? 'True' : 'False';
console.log(isAdult);
*/


/* Обычная функция с тернарным оператором
function isAdult(age) {
	return age >=18 ? 'True' : 'False';
}
console.log(isAdult(numericAge));
*/

/* Обычная функция с условиями
function isAdult(age) {
   if (age >=18) {
	   return 'True';
   }
   else {
	   return 'False';
   }
}
console.log(isAdult(numericAge));
*/




