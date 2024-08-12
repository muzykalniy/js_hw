'use strict';

// Спрашиваю возраст
const userBirthYearInput = prompt("Enter your birth year:");
const userBirthYear = Number(userBirthYearInput);

// Спрашиваю город
const userCity = prompt("Enter your city:");

// Спрашиваю любимый спорт
const userSport = prompt("Enter your favourite sport:");

// Объявил перменные пустыми строчками, чтобы не выдавало undefined
let ageAlert = '';
let cityAlert = '';
let sportAlert = '';
let birthCancelAlert = '';
let cityCancelAlert = '';
let sportCancelAlert = '';

// Проверка ручного ввода
if (userBirthYearInput === null) {
	birthCancelAlert = "Sorry, that you decide not to mention your birth year.";

} else if (isNaN(userBirthYear) || userBirthYear <= 0 ) {
	birthCancelAlert = "You entered invalid birth year.";

}
 else {
	const currentYear = new Date().getFullYear();
	const userAge = currentYear - userBirthYear;

	// Проверка на возраст больше 100лет
	if (userAge > 100) {
		birthCancelAlert = `I am sorry - are you a zombie? Your age is: ${userAge} years old.`;
	} else {
		ageAlert = `Your age is: ${userAge} years old.`;
	}
}

// Проверка ввода города
if (userCity === null) {
	cityCancelAlert = "Sorry, that you decide not to mention your city.";
} else {
	const capitalCities = {
		'Kyiv': 'Ukraine',
		'Washington': 'USA',
		'London': 'Great Britain'
	};

	if (capitalCities[userCity]) {
		cityAlert = `You are living in the capital ${capitalCities[userCity]}.`;
	} else if (userCity.trim() === '') {
		cityCancelAlert = "Sorry, that you decide not to mention your city.";
	} else {
		cityAlert = `You are living in the city ${userCity}.`;
	}
}

// Проверка спорта
if (userSport === null) {
	sportCancelAlert = "Sorry, that you decide not to mention your favourite sport.";
} else {
	const sportChampions = {
		'boxing': 'Oleksandr Usyk',
		'tennis': 'Carlos Alcaraz',
		'gymnastics': 'Simone Biles'
	};
// если у нас sportChampions[userSport] совпадает с введенным, тогда будет true и подтянется значение ключа соотвествующий спортсмен
	if (sportChampions[userSport]) {
		sportAlert = `Cool! Do you want to be as ${sportChampions[userSport]}?`;
	} else if (userSport.trim() === '') {
		sportCancelAlert = "Sorry, that you decide not to mention your favourite sport.";
	} else {
		sportAlert = `Your favourite sport is: ${userSport}.`;
	}
}

/*Финальное сообщение
Проверяем содержит ли birthCancelAlert невалидное значение и если да, то выводится сообщение об ошибке и добавляется перенос строки.
Если пустая (пользователь все верно ввел) - выводится ageAlert
*/
const finalMessage = `
${birthCancelAlert ? birthCancelAlert + '\n' : ageAlert} 
${cityCancelAlert ? cityCancelAlert + '\n' : cityAlert}
${sportCancelAlert ? sportCancelAlert + '\n' : sportAlert}
`;

// Выведение результата
alert(finalMessage.trim());

































