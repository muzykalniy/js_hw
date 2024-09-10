'use strict';


const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1
const res = array.reduce((acc, item) => {
  if (item < 0) return acc;
  acc.sum += item;
  acc.qty++;
  return acc;
}, { sum: 0, qty: 0 });
console.log(res);

/* const positiveItem = array.filter((item) => item > 0);
console.log('Positive elements', positiveItem);

const sumPositiveNumFunc = (arr) => {
  let sumBox = 0;
  for (let i = 0; i < arr.length; i++) {
    sumBox += arr[i];
  }
  return sumBox;
};
const result1 = sumPositiveNumFunc(positiveItem);
// const sumPositiveNum = positiveItem.reduce((sum, item) => sum + item, 0); reduce метод почитать
// sum аккумулятора, 0 это начальное значение аккумулятора
console.log('Sum of the positive elements', result1);

console.log('Number of positive elements', positiveItem.length); */

// 2
const minNum = array.reduce((min, item) => (item < min ? item : min), array[0]);
const indexOfMin = array.indexOf(minNum);
console.log(`Min number ${minNum} with index ${indexOfMin}`);


// 3
const maxNum = array.reduce((max, item) => (item > max ? item : max), array[0]);
const indexOfMax = array.indexOf(maxNum);
console.log(`Max num ${maxNum} with index ${indexOfMax}`);

// 4
const negativeItems = array.filter((item) => item < 0);
console.log('Number of negative elements', negativeItems.length);

// 5
const oddPositiveNum = array.filter((item) => item % 2 !== 0 && item > 0);
console.log('Number of odd and positive elements', oddPositiveNum.length);

// 6
const evenPositiveNum = array.filter((item) => item % 2 === 0);
console.log('Number of even and positive elements', evenPositiveNum.length);

// 7
const sumEvenPositiveNum = array
  .filter((item) => item % 2 === 0 && item > 0)
  .reduce((sum, item) => (sum + item), 0);
console.log('Sum of even and positive numbers', sumEvenPositiveNum);

// 8
const sumOddPositiveNum = array
  .filter((item) => item % 2 !== 0 && item > 0)
  .reduce((sum, item) => sum + item, 0);
console.log('Sum of odd and positive numbers', sumOddPositiveNum);

// 9
const multiplyPositiveNum = array
  .filter((item) => item > 0)
  .reduce((multiply, item) => multiply * item, 1);
console.log('Multiply positive elements', multiplyPositiveNum);

// 10
const maxItem = array.reduce((max, item) => (item > max ? item : max), array[0]);
const newArrZero = array.map((item) => (item === maxItem ? maxItem : 0));
console.log('Converted array items to 0 except max item', newArrZero);

