'use strict';

// 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const res1 = [...arr1, ...arr2];
console.log(res1);

// 2
const res2 = arr1.reverse();
console.log(res2);

// 3
const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);

// 4
const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
console.log(arr4);

// 5
const arr5 = ['js', 'css', 'jq'];
console.log(arr5[0]);

// 6
console.log(arr5[arr5.length - 1]);

// 7 возвращает в новом массиве только те элементы в промежутке, который указали по 3ий невключительно
const arr6 = [1, 2, 3, 4, 5];
const newArr6 = arr6.slice(0, 3);
console.log(newArr6);

// 8 удаляет элементы и возвращает их в новом массиве
const newArr7 = arr6.splice(3, 2);
console.log(newArr7);

// 9
const arr7 = [1, 2, 3, 4, 5];
arr7.splice(1, 2);
console.log(arr7);

// 10
const arr8 = [1, 2, 3, 4, 5];
const newArr8 = arr8.slice(1, 4);
console.log(newArr8);

// 11 старт с 3ьего включительно
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(3, 0, 'a', 'b', 'c');
console.log(arr9);

// 12
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 0, 'a', 'b');
console.log(arr10);
arr10.splice(6, 0, 'c');
console.log(arr10);
arr10.push('e');
console.log(arr10);

// 13
const arr11 = [3, 4, 1, 2, 7];
arr11.sort((a, b) => a - b);
console.log(arr11);

// 14

const arr12 = [5, 6, 7, 8, 9];
const sum = arr12.reduce((acc, item) => acc + item, 0);
console.log(sum);

// 15 map проводит действия с каждым элементом массива и изменяет текущий или создает новый массив, что не может делать forEach
let arr13 = [5, 6, 7, 8, 9];
arr13 = arr13.map((item) => item ** 2);
console.log(arr13);

// 16
const arr14 = [1, -3, 5, 6, -7, 8, 9, -11];
const newArr14 = arr14.filter((item) => item < 0);
console.log(newArr14);

// 17
const arr15 = [1, -3, 5, 6, -7, 8, 9, -11];
const newArr15 = arr15.filter((item) => item > 0);
console.log(newArr15);

// 18
const arr16 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const newArr16 = arr16.filter((item) => item.length > 5);
console.log(newArr16);

// 19
const arr17 = [1, 2, [3, 4], 5, [6, 7]];
const newArr17 = arr17.filter((itemSubArr) => itemSubArr.length > 1);
console.log(newArr17);

// 20 мы в аккум основного массива суммируем аккум подмассива который внутри себя суммирует
const arr18 = [[1, 2, 3], [4, 5], [6]];
const newArr18 = arr18.reduce((acc, itemArr) => acc + itemArr.reduce((accSubArr, itemSubArr) => accSubArr + itemSubArr, 0), 0);
console.log(newArr18);

// 21
const arr19 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const flattenedArr = arr19.flat(2);
const newArr19 = flattenedArr.reduce((acc, item) => acc + item, 0);
console.log(newArr19);
