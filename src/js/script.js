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

for (const person of people) {
  // this указывает на объект, привязанный через bind. Поэтому this.firstName будет ссылаться на свойство firstName этого объекта person.
  // если не передавать person.firstName как аргумент в функции greet, все равно он будет доступен через this.firstName
  const funcGreet = greet.bind(person, 'Hello');
  funcGreet();
}
