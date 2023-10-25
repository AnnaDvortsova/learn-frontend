// Метод toSpliced() возвращает новый массив с удаленными и/или замененными некоторыми элементами по заданному индексу.

const color = ['red', 'green', 'blue'];

const result1 = color.toSpliced(2, 0, 'yellow');
console.log(result1); // ['red', 'green', 'yellow', 'blue']

const result2 = color.toSpliced(3, 1, 'black');
console.log(result2); //['red', 'green', 'yellow', 'black']

console.log(color); //['red', 'green', 'blue']