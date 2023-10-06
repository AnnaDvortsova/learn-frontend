// ***Задача 8.3***
// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

function operationsWithEvenOdd(number1, number2) {
    if (number1 % 2 === 0 && number2 % 2 === 0) {
        return number1 * number2;
    }
    if (number1 % 2 !== 0 && number2 % 2 !== 0) {
        return number1 + number2;
    }
    if (number1 % 2 === 0 || number2 % 2 === 0) {
        if (number1 % 2 !== 0) {
            return number1;
        } else {
            return number2;
        }
    }

}

// function operationsWithEvenOdd(number1, number2) {
//     if (number1 % 2 === 0 && number2 % 2 === 0) {
//         return number1 * number2;
//     }
//     if (number1 % 2 !== 0 && number2 % 2 !== 0) {
//         return number1 + number2;
//     }
//     if (number1 % 2 === 0 && number2 % 2 !== 0) {
//         return number2;
//     } else {
//         return number1;
//     }
// }

console.log(operationsWithEvenOdd(2, 4)); // 8
console.log(operationsWithEvenOdd(11, 31)); // 42
console.log(operationsWithEvenOdd(-8, -15)); // -15
console.log(operationsWithEvenOdd(-11, -20));