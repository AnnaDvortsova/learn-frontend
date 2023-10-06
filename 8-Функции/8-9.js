// ***Задача 8.9***
// Написать функцию, принимающую массив отрицательных и положительных чисел. Она должна возвращать новый массив только с отрицательными числами.

const arr = [43, -23, -12, 5, -1, 42];

function arrWithNegative(array) {
    let arrayWithNegative = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            arrayWithNegative.push(array[i]);
        }
    }
    return arrayWithNegative;
}

console.log(arrWithNegative(arr));