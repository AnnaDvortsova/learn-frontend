// Задача 4
// Объявите три переменные a, b и c(например, a = 3, b = 2, c = 4) не равные друг другу.Пользуясь операторами if выведете среднее из них(больше одного но меньше другого).

const a = 2;
const b = 9;
const c = 6;

if (a > b && a < c) {
    console.log(a);
} else if (b > a && b < c) {
    console.log(b);
} else {
    console.log(c);
}