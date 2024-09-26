'use strict';

// тут буду хранить таблицу
let tableHTML = '';

let number = 1;

// создал 10 строк
for (let i = 0; i < 10; i++) {
  // начинаю добавлять ряд
  tableHTML += '<tr>';
  // создал 10 колонок
  for (let j = 0; j < 10; j++) {
    // добавляю ячейки с числом 1
    tableHTML += `<td>${number}</td>`;
    // тут я число с каждым шагом цикла увеличиваю на 1
    number++;
  }
  // закрываю ряд
  tableHTML += '</tr>';
}
// innerHTML свойство для того, чтобы получить или изменить содержимое элемента
document.getElementById('myTable').innerHTML = tableHTML;
