// ***Задача 8.10***
// Написать функцию, принимающую массив чисел. Она должна возвращать `true`, если в массиве хотя бы одно число делятся на 5, иначе `false`.

const arr = [1, 5, 36, 37, 42];
const arr2 = [9, 6, 76, 3, 32];

function some(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            return true;
        }
    }
    return false;
}


console.log(some(arr));