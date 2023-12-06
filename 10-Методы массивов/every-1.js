// ***Задача every.1***

// Дан массив. Проверить, являются ли все элементы числами.

const arr = [1, 45, 43, 4, 6, 8];
//output
// true

const arr1 = [1, 45, "43", 4, 6, 8];
//output
// false

const result = arr.every((element) => typeof element === 'number');
console.log(result);

const result1 = arr1.every((element) => typeof element === 'number');
console.log(result1);