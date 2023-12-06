// Дан массив строк. Найти первый элемент, в котором записано число. Для решения задачи потребуются такие функции, как `isNaN()` и `parseInt()`.
const arr = ["apple", "fly", "banana", "5", "cat", "12", "dog"];

const result = arr.find((element) => {
    const number = parseInt(element);
    const isNumber = !isNaN(number);
    return isNumber;
});

console.log(result);