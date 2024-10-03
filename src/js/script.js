'use strict';

let tableHTML = '';
let number = 1;
for (let i = 0; i < 10; i++) {
  tableHTML += '<tr>';
  for (let j = 0; j < 10; j++) {
    tableHTML += `<td>${number}</td>`;
    number++;
  }
  tableHTML += '</tr>';
}
document.getElementById('myTable').innerHTML = tableHTML;
