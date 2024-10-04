'use strict';

// function to create element with class
const createEl = (tagEl, classEl) => {
  const createdEl = document.createElement(tagEl);
  createdEl.classList.add(classEl);
  return createdEl;
};

// function to append element
const appendEl = (wrapperSelector = null, elementToAppend = null) => {
  if (!wrapperSelector || !elementToAppend) return;
  const wrapperEl = document.querySelector(wrapperSelector);
  if (!wrapperEl) return;
  wrapperEl.append(elementToAppend);
};

// function call
const newEl = createEl('div', 'showed__div');
appendEl('.input__wrapper', newEl);



const focusEl = document.getElementById('input__focus');
const showEl = document.querySelector('.showed__div');

// event to show element
focusEl.addEventListener('focus', () => {
  showEl.style.display = 'block';
});
// event to hide element
focusEl.addEventListener('blur', () => {
  showEl.style.display = 'none';
});
