'use strict';

// 1
const showEl = (listEl) => {
  const elementToChoose = document.querySelectorAll(listEl);

  elementToChoose.forEach((el) => {
    console.log(el, el.textContent);
  });
};

showEl('li');

// 2 , 3

// function to add atts' values into the array
const pushAttValue = (heapOfAtt, arrEmpty) => {
  for (const attribute of heapOfAtt) {
    arrEmpty.push(attribute.value);
  }
};

// function to add atts' names into the array
const pushAttName = (heapOfAtt, arrEmpty) => {
  for (const attribute of heapOfAtt) {
    arrEmpty.push(attribute.name);
  }
};

const getEl = (tag) => {
  const elements = document.querySelectorAll(tag);
  elements.forEach((element) => {
    // empty array for attributes' values
    const arrAttValues = [];
    // empty array for attributes' names
    const arrAttNames = [];

    // getting all attributes from elements
    const { attributes } = element;

    // call the function to add attributes' values into array
    pushAttValue(attributes, arrAttValues);
    // call the function to add attributes' names into array
    pushAttName(attributes, arrAttNames);
    console.log(arrAttValues);
    console.log(arrAttNames);
  });
};
getEl('ul');

// 4

