// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

const numbers = [6, 15, 6, 99, 100];

console.log(numbers.indexOf(6)); // 0
console.log(numbers.indexOf(6, 1)); // 2
console.log(numbers.indexOf(55)); // -1