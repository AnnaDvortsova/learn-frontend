// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

const array = [-5, 9, 32, -10, 7];

const result = array.filter((elem) => elem > 0);
console.log(result); // [9, 32, 7]