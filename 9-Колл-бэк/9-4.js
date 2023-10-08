// ***Задача 9.4***

// Используйте функцию `map` из предыдущей задачи. Функция `map` будет принимать числовой массив, который состоит только из 1 и 0 в случайном порядке. Напишите callback-функцию, которая будет инвертировать элемент предыдущего массива и записывать его в новый. Callback-функцию можно создавать стрелочным способом.

const arr = [1, 1, 0, 0, 1, 0, 1];
let newArray = [];

function map(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function inversion(elem) {
    if (elem === 0) {
        elem = 1;
        newArray.push(elem);
    } else {
        elem = 0;
        newArray.push(elem);
    }
}

map(arr, inversion);
console.log(newArray);
