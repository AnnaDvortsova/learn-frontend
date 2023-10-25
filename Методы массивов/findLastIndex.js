// Метод findLastIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1. Поиск происходит с конца массива.

const array1 = ["apricot", "banana", "kiwi", "lime", "42", "mango"];

const result = array1.findLastIndex((element) => element === 'lime');

console.log(result); // 3