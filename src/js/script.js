'use strict';

function insertWordInto(str) {
  const originalStr = str.split(' '); // розділяємо рядок на слова
  let currentIndex = 0; // для відстеження місця вставки

  return function (word) {
    // якщо пройдено всі можливі місця, починаємо знову
    if (currentIndex > originalStr.length) currentIndex = 0;

    // створюємо копію рядка
    const result = [...originalStr];

    // вставляємо слово у поточне місце
    result.splice(currentIndex, 0, word);

    // збільшуємо індекс для наступного разу
    currentIndex++;

    // повертаємо результат як рядок
    return result.join(' ');
  };
}

// Приклад використання
const insert = insertWordInto('hello world');
console.log(insert('Odesa')); // -> 'Odesa hello world'
console.log(insert('Odesa')); // -> 'hello Odesa world'
console.log(insert('Odesa')); // -> 'hello world Odesa'
console.log(insert('Odesa')); // -> 'Odesa hello world'





















// const InsertWordInto = (mainString) => {
//   if (typeof (mainString) !== 'string') {
//     throw new Error('Parameter must be a string');
//   }
//   // делю строку на части слова по пробелу
//   const arrWords = mainString.split(' ');
//
//   // счетчик, чтобы знать куда вставлять новое слово каждый раз
//   // начинаем с нуля так как первая вставка будет с начала
//   let currentIndex = 0;
//
//   // возвращаем внутреннюю функцию с логикой вставки
//   return function (newWord) {
//     // делаю пустую строку для заполнения
//     let result = '';
//
//     if (currentIndex === 0) {
//       result = `${arrWords[0]} ${newWord} ${arrWords[1]}`;
//     } else if (currentIndex === 1) {
//       result = `${newWord} ${arrWords[0]} ${arrWords[1]}`;
//     } else if (currentIndex === 2) {
//       result = `${arrWords[0]} ${arrWords[1]} ${newWord}`;
//     } else if (currentIndex === 3) {
//       result = `${arrWords[0]} ${newWord} ${arrWords[1]}`;
//     }
//
//     /* После каждой вставки мы увеличиваем счетчик currentIndex чтобы вставить в следующий раз в другое место
//     currentIndex + 1 увеличиваем счетчик на 1
//     % 3 когда currentIndex достигает 3 он возвращается к 0, циклично возвращаемся в начало */
//     currentIndex = (currentIndex + 1) % 3;
//
//     return result;
//   };
// };
// const insert = InsertWordInto('hello world');
//
// const result = insert('Odesa'); // 'hello Odesa world'
// const secondResult = insert('Odesa'); // 'Odesa hello world'
// const thirdResult = insert('Odesa'); // 'hello world Odesa'
// // optional
// const fourthResult = insert('Odesa'); // -> 'Odesa hello world'
//
//
// console.log(result);
// console.log(secondResult);
// console.log(thirdResult);
// console.log(fourthResult);
