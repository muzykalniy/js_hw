'use strict';

const images = [
  '/src/images/1.jpg',
  '/src/images/2.jpg',
  '/src/images/3.jpg',
  '/src/images/4.jpg',
  '/src/images/5.jpg',
  '/src/images/6.jpg',
  '/src/images/7.jpg',
  '/src/images/8.jpg',
  '/src/images/9.jpg',
];

const getRandomNumber = (arrLength) => Math.floor(Math.random() * arrLength);
const generateImg = () => {
  const randomIndex = getRandomNumber(images.length);
  const img = images[randomIndex];
  document.getElementById('image').src = img;
};
generateImg();
