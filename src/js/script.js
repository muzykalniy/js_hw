'use strict';


// сервисная переменная для возможности замены пути
const IMG_FOLDER = './images/';
const IMG_EXTENSION = '.jpg';


const appendEl = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.append(elementToAppend);
};

const getRandomNumber = () => {
  const num = Math.floor(Math.random() * 10);
  if (num === 0) return 1;
  return num;
};


const generateImg = (imgName) => {
  const img = document.createElement('img');
  img.src = `${IMG_FOLDER}${imgName + IMG_EXTENSION}`;
  img.alt = `${IMG_FOLDER}${imgName + IMG_EXTENSION}`;
  img.title = `${IMG_FOLDER}${imgName + IMG_EXTENSION}`;
  return img;
};

// генерирую случайное изображение
const imgToAppend = generateImg(getRandomNumber());

// вывод картинки на страницу

appendEl(document.body, imgToAppend);




// const images = [
//   '/src/images/1.jpg',
//   '/src/images/2.jpg',
//   '/src/images/3.jpg',
//   '/src/images/4.jpg',
//   '/src/images/5.jpg',
//   '/src/images/6.jpg',
//   '/src/images/7.jpg',
//   '/src/images/8.jpg',
//   '/src/images/9.jpg',
// ];
//
// const randomImageFunc = () => {
//   /* Math.random() генерирует случайное число от 0 до 1.
// Умножаю это число на длину массива images, чтобы получить число, которое подходит для списка картинок.
// Math.floor() округляет это число до целого числа, чтобы мог использовать его как индекс. */
//   const randomIndex = Math.floor(Math.random() * images.length);
//   // выбираю случайную картинку с массива images используя случайный индекс
//   const randomImage = images[randomIndex];
//   // находит элемент на странице с id="randomImage" и устанавливает его src на случайную картинку
//   document.getElementById('randomImage').src = randomImage;
// };
// randomImageFunc();
