// ***Задача 8***
// Дан массив `a`. Поменяйте местами его минимальный и максимальный элементы и выведете на экран.
// Пример: `let a = [7, 2, 3, 0];`

let a = [7, 2, 3, 0];
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
let b = a[a.indexOf(min)];
a[a.indexOf(min)] = a[a.indexOf(max)];
a[a.indexOf(max)] = b;
console.log(a);