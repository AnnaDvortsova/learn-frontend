// Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined.

const array1 = [10, 36, 5, 9, 111];
const array2 = [113, 15, 2, 6, 100];

const result1 = array1.find((element) => element % 6 === 0);
const result2 = array2.find((element) => element < 6);

console.log(result1, result2); // 36, 2