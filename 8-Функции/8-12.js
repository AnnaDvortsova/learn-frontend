// *** Задача 8.12 ***
//Написать функцию, принимающую массив чисел.Она должна возвращать новый массив, который будет зеркальным отражение переданного массива.

const arr = [1, 2, 3, 4, 5, 6];

function reversedArr(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

console.log(reversedArr(arr));