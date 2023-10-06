// ***Задача 3***
// Объявите три переменные a, b и c не равные друг другу (например, a=3, b=2, c=4). Пользуясь операторами if выведете максимальное из них.

const a = 1;
const b = 5;
const c = 9;

if (a - b > 0) {
    console.log(a);
} else if (b - c > 0) {
    console.log(b);
} else {
    console.log(c);
}