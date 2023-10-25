// Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.

const arr1 = [11, 15, 102, 6, 3];
const arr2 = [12, 55, 18, 99, 44];

console.log(arr1.findIndex((element) => element % 5 === 0)); // 1

console.log(arr2.findIndex((element) => element > 55)); // 3