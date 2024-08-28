'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};
console.log(removeElement(array, 5));
