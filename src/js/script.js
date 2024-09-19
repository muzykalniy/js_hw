'use strict';

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
  },
];
const greet = function (greeting) {
  console.log(`${greeting}, ${this.firstName}`);
};

for (const person1 of people) {
  // this указывает на объект, привязанный через bind. Поэтому this.firstName будет ссылаться на свойство firstName этого объекта person.
  // если не передавать person.firstName как аргумент в функции greet, все равно он будет доступен через this.firstName
  const funcGreet = greet.bind(person1, 'Hello');
  funcGreet();
}



// решил ниже потренироваться, пока в процессе решения

// 1
const greetAndAge = function (greeting2) {
  console.log(`${greeting2}, ${this.firstName}. You are ${this.age} years old`);
};

for (const person2 of people) {
  const funcGreet2 = greetAndAge.bind(person2, 'Hello');
  funcGreet2();
}

// 2

const surnameChange = function (newSurname) {
  this.lastName = newSurname;
  console.log(`${this.firstName}, your new surname is ${newSurname}`);
};
for (const person3 of people) {
  const newSurnameInput = prompt('Please write new surname:');
  const funcNewSurname = surnameChange.bind(person3, `${newSurnameInput}`);
  funcNewSurname();
}
