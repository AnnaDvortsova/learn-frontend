// ***Задача 8.8***
// Написать функцию, принимающую массив чисел. Она должна возвращать новый массив с квадратами элементов переданного массива.

const arr = [1, 5, 3, 10];


function arrWithSquare(array) {
    let arrayWithSquare = [];
    for (let i = 0; i < array.length; i++) {
        arrayWithSquare.push(array[i] * array[i]);
    }
    return arrayWithSquare;
}

console.log(arrWithSquare(arr));