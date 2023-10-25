// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

const array1 = [2, 3, 5, 9, 6];
const array2 = [2, 3, 5, -9, 6];

const result1 = array1.some((elem) => elem < 0);
const result2 = array2.some((elem) => elem < 0);
console.log(result1, result2); // false true