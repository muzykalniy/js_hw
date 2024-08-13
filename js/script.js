'use strict';

let numOrStr = prompt('input number or string');
console.log(numOrStr);

/*
switch (true) помогает использовать логические условия в case
в данном случае можно проверить на true, но можно и на false
 */

switch (true) {
	case (numOrStr === null):
		console.log('ви скасували');
		break;
	case (numOrStr.trim() === ''):
		console.log('Empty String');
		break;
	case (isNaN(+numOrStr)):
		console.log('number is Ba_NaN');
		break;
	default:
		console.log('OK!');
		break;
}


// // Способс введением переменной и заданием в нее первоначального условия
// let numOrStr = prompt('input number or string');
// console.log(numOrStr);
//
// // Создаём промежуточную переменную для обработки и используем ее для подстановки потом в switch
// let caseType;
//
// if (numOrStr === null) {
// 	caseType = 'null';
// } else if (numOrStr.trim() === '') {
// 	caseType = 'empty';
// } else if (isNaN(+numOrStr)) {
// 	caseType = 'NaN';
// } else {
// 	caseType = 'valid';
// }
// // switch используется для выполнения разных блоков кода в зависимости от значения переменной caseType
// switch (caseType) {
// 	case 'null':
// 		console.log('ви скасували');
// 		break;
// 	case 'empty':
// 		console.log('Empty String');
// 		break;
// 	case 'NaN':
// 		console.log('number is Ba_NaN');
// 		break;
// 	case 'valid':
// 		console.log('OK!');
// 		break;
// }