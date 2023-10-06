// ***Задача 2***
// Дано n. Из первых n натуральных чисел выведете только чётные.

let str = '';
const n = 19;

1
for (let i = 0; i < n + 1; i = i + 2) {
    str = str + ' ' + i;
}

2
for (let i = 0; i < n + 1; i = i + 1) {
    if (i % 2 === 0) {
        str = str + ' ' + i;
    }
}

console.log(str);