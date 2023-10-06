// ***Задача 10***????
// Дан массив `a`. Определите длину самой длинной возрастающей последовательности в массиве.
// Пример: `let a = [1, 5, 6, 0, 1, 2, 1, 1, 7, 10, 11, 0];`

// let a = [1, 5, 6, 0, 1, 2, 1, 1, 7, 10, 11, 0];
// let length = 0;
// let count = 1;

// for (let i = 0; i < a.length - 1; i++) {
//     if (a[i] < a[i + 1]) {
//         count++;
//     }
//     if (a[i] > a[i + 1]) {
//         length = count;
//         count = 1;
//     }
//     if (length < count) {
//         length = count;
//     }
// }
// console.log(length);

let a = [1, 5, 6, 0, 1, 2, 1, 1, 7, 10, 11, 100];
let length = 0;
let count = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i + 1] !== undefined && a[i] < a[i + 1]) {
        count++;
    }

    if (a[i + 1] !== undefined && a[i] > a[i + 1]) {
        count = 0;
    }

    if (length < (count + 1)) {
        length = count + 1;
    }
}

console.log(length);
