// ***Задача 8.1***
// Написать функцию, получающую на вход одно число. Если число чётное - функция возвращает `true` , если нет - `false`.

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(42)); // true
console.log(isEven(15)); // false
console.log(isEven(-111)); // false