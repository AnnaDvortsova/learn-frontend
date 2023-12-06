// Функция isNaN() определяет является ли литерал или переменная нечисловым значением (NaN) или нет.

const a = isNaN("apple"); //true
const b = isNaN('565'); //false
const c = isNaN(45); //false
const d = isNaN(NaN); // true

console.log(a, b, c, d);