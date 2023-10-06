// *** Задача 8.2 ***
//Написать функцию, получающую на вход одно число.Она должна развращать противоположное число.

function oppositeNumber(number) {
    number = number * (-1);
    return number;
}

console.log(oppositeNumber(1)); // -1
console.log(oppositeNumber(-42)); // 42
console.log(oppositeNumber(56)); // -56