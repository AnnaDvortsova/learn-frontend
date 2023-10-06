// ***Задача 1***
// Дан массив `a`. Выведете первый, третий элемент и длину массива.
// Пример: `let a = [5, 2, -1, 9];`

let a = [5, 2, -1, 9];
let length = 0;

for (let i = 0; a[i] !== undefined; i++) {
    length++;
    if ((i + 1) % 2 !== 0) {
        console.log(a[i]);
    }
}

console.log(length);