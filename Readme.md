## Опис Домашки
Написати свою реалізацію функції bind

При реалізації фунції bind заборонено використовувати методи call та apply

const people = [
{
firstName: "John",
lastName: "Doe",
age: 30
},
{
firstName: "Jane",
lastName: "Smith",
age: 25
},
{
firstName: "Alice",
lastName: "Johnson",
age: 28
}
];
const  greet = (greeting) => {
console.log(greeting + ", " + this.firstName);
}