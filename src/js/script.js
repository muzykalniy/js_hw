'use strict';

const InsertWordInto = (mainString) => {
  if (typeof (mainString) !== 'string') {
    throw new Error('Parameter must be a string');
  }
  // делю строку на части слова по пробелу
  const arrWords = mainString.split(' ');

  // счетчик, чтобы знать куда вставлять новое слово каждый раз
  // начинаем с нуля так как первая вставка будет с начала
  let currentIndex = 0;

  // возвращаем внутреннюю функцию с логикой вставки
  return function (newWord) {
    // делаю пустую строку для заполнения
    let result = '';

    if (currentIndex === 0) {
      result = `${arrWords[0]} ${newWord} ${arrWords[1]}`;
    } else if (currentIndex === 1) {
      result = `${newWord} ${arrWords[0]} ${arrWords[1]}`;
    } else if (currentIndex === 2) {
      result = `${arrWords[0]} ${arrWords[1]} ${newWord}`;
    } else if (currentIndex === 3) {
      result = `${arrWords[0]} ${newWord} ${arrWords[1]}`;
    }

    /* После каждой вставки мы увеличиваем счетчик currentIndex чтобы вставить в следующий раз в другое место
    currentIndex + 1 увеличиваем счетчик на 1
    % 3 когда currentIndex достигает 3 он возвращается к 0, циклично возвращаемся в начало */
    currentIndex = (currentIndex + 1) % 3;

    return result;
  };
};
const insert = InsertWordInto('hello world');

const result = insert('Odesa'); // 'hello Odesa world'
const secondResult = insert('Odesa'); // 'Odesa hello world'
const thirdResult = insert('Odesa'); // 'hello world Odesa'
// optional
const fourthResult = insert('Odesa'); // -> 'Odesa hello world'


console.log(result);
console.log(secondResult);
console.log(thirdResult);
console.log(fourthResult);
