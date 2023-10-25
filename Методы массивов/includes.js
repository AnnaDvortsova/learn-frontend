// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

const array = [1, 10, '42', 56];

const result = array.includes('42');
const result2 = array.includes(5);

console.log(result, result2); // true, false