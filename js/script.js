'use strict';

const firstNum = +prompt('Please enter a first number');
const secondNum = +prompt('Please enter a second number');
const thirdNum = +prompt('Please enter a third number');

// const roundedAverageNumber = averageNumber.toFixed(2);
// alert(`Average number is: ${roundedAverageNumber}`);


const averageNumber = (firstNum + secondNum + thirdNum) / 3;
// const roundedAverageNumber = averageNumber.toFixed(2);

alert(`Average number is: ${averageNumber}`);
// alert(`Average number is: ${roundedAverageNumber}`);