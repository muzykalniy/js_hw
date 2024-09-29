'use strict';

// функция для создания блока с классом внутри другого блока
const insertElement = (wrapperClass, elementTag, elementClass) => {
  const wrapper = document.querySelector(wrapperClass);
  const newElement = document.createElement(elementTag);
  newElement.classList.add(elementClass);
  wrapper.append(newElement);
};

insertElement('.input__wrapper', 'div', 'showed__div');

const elementFocus = document.getElementById('input__focus');
const elementShow = document.querySelector('.showed__div');

// показываю showed__div при нажатии на инпут
elementFocus.addEventListener('focus', (e) => {
  elementShow.style.display = 'block';
});

// тут прячу с помощью события blur
elementFocus.addEventListener('blur', (e) => {
  elementShow.style.display = 'none';
});
