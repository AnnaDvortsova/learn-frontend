// Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr2.concat(arr1);
console.log(arr3); //[4, 5, 6, 1, 2, 3]

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);
console.log(array3);  //["a", "b", "c", "d", "e", "f"]