'use strict';

const table = document.createElement('table');
let number = 1;

for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement('td');
    cell.textContent = number;
    number++;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

document.getElementById('myTable').appendChild(table);
