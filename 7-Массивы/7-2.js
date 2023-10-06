// ***Задача 2***
// Дан массив `a`. Выведете минимальный и максимальный элементы массива.
// Пример: `let a = [5, 2, -1, 9];`

let a = [5, 2, -1, 9];
let min = a[0];
let max = a[0];

for (let i = 0; i < a.length; i++) {
    if (min > a[i]) {
        min = a[i];
    }
    if (max < a[i]) {
        max = a[i];
    }
}

console.log(min, max);