// ***Задача some.1***

// Дан массив. Проверить, есть ли в нём хотя бы один строковый элемента.

const arr = [1, 45, 43, 4, 6, 8];
//output
// false

const arr1 = [1, 45, "43", 4, 6, 8];
//output
// true

const result = arr.some((element) => typeof element === 'string');
console.log(result);

const result1 = arr1.some((element) => typeof element === 'string');
console.log(result1);