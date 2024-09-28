'use strict';

let number = 1;
// функция будет аппендить таблицу в нужный элемент
const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.append(elementToAppend);
};

// функция которая будет генерить таблицу
const generateTable = () => {
  const tableSize = 10;

  // создаем wrapper  чтобы можно было добавлять tr
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  table.append(tbody);

  for (let i = 0; i < tableSize; i++) {
    const tr = document.createElement('tr');

    // цикл чтобы нагенерить td внутри tr
    for (let c = 0; c < tableSize; c++) {
      const td = document.createElement('td');
      td.innerText = `${number}`;
      number++;
      // каждая новая td будет добавляться в конец
      tr.append(td);
    }
    // после того как на итерации мы tr наполнили tdшками надо ее добавить в tbody
    tbody.append(tr);
  }
  // из функции возвращаем таблицу
  return table;
};

appendHTMLElement(document.body, generateTable());




// // сделали новый элемент
// const div = document.createElement('div');
// // наполняем его данными
// div.innerHTML = 'Hello world!';
//
// appendHTMLElement(document.body, div);





// // тут буду хранить таблицу
// let tableHTML = '';
//
// let number = 1;
//
// // создал 10 строк
// for (let i = 0; i < 10; i++) {
//   // начинаю добавлять ряд
//   tableHTML += '<tr>';
//   // создал 10 колонок
//   for (let j = 0; j < 10; j++) {
//     // добавляю ячейки с числом 1
//     tableHTML += `<td>${number}</td>`;
//     // тут я число с каждым шагом цикла увеличиваю на 1
//     number++;
//   }
//   // закрываю ряд
//   tableHTML += '</tr>';
// }
// // innerHTML свойство для того, чтобы получить или изменить содержимое элемента
// document.getElementById('myTable').innerHTML = tableHTML;
