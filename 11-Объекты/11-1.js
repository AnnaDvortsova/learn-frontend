// ***Задача 11.1***

// Даны переменные. На их основе создать объект.

const firstName = "Иван";
const lastName = "Иванов";
const age = 23;
const email = "ivanov@mail.ru";

//output
// const user = {
// 	"first-name": "Иван",
// 	"last-name": "Иванов",
// 	age: 23,
// 	email: "ivanov@mail.ru",
// };

const user = {};
user["first-name"] = firstName;
user["last-name"] = lastName;
user['age'] = age;
user['email'] = email;

console.log(user);