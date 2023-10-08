// ***Задача 9.3 (аналог метода map)***

// - Напишите функцию `map`, которая будет первым параметром принимать массив, вторым - callback-функцию, которая будет применяться к каждому элементу и индексу элемента массива по очереди. `map` должна возвращать новый массив.
// - Передайте в созданную функцию `map` числовой массив, а в качестве callback-функции - функцию, которая будет высчитывать квадрат каждого элемента и добавлять его в новый массив. Callback-функцию можно создавать стрелочным способом.

const arr = [2, 3, 4, 5];
let newArray = [];

function map(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function squareCallbackFunction(elem) {
    newArray.push(elem * elem);
}

map(arr, squareCallbackFunction);
console.log(newArray);