'use strict';

const arrayLengthInput = parseInt(prompt('Enter array length:'), 10);
const array = [];

const arrayFunc = (arrayLength, callbackSort, callbackSplice) => {
  if (arrayLength <= 0 || isNaN(arrayLength)) {
    return 'Error';
  } for (let i = 0; i < arrayLength; i++) {
    const value = prompt('Enter value (only numbers, please):');
    array[i] = value;
  }

  console.log('Original array:', array);

  callbackSort(array);
  console.log('Sorted array min->max:', array);

  const deletedElements = callbackSplice(array);
  console.log('Array after splicing (elements from index  2 to 4 included removed):', array);
  console.log('Deleted elements:', deletedElements);

  return array;
};

const arraySort = (arr) => arr.sort((a, b) => a - b);
const arraySplice = (arr) => arr.splice(2, 3);// 4 - 2 + 1 = 3

const result = arrayFunc(arrayLengthInput, arraySort, arraySplice);
console.log(result);







