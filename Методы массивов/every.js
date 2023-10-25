// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

const arr1 = [12, 5, 8, 130, 44];
const arr2 = [12, 54, 18, 130, 44];

const result1 = arr1.every((element) => element >= 10); // false

const result2 = arr2.every((element) => element >= 10); // true

console.log(result1, result2); 