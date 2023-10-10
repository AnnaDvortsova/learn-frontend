// ***Задача 9.5 (аналог метода filter)***

// - Напишите функцию `filter`, которая будет первым параметром принимать массив, вторым - callback-функцию, которая будет применяться к каждому элементу и индексу элемента массива по очереди. `filter` должна возвращать новый отфильтрованный массив по условиям, описанных в callback-функции, иначе возвращает пустой массив `[]`.
// - Передайте в созданную функцию `filter` числовой массив, а в качестве callback-функции - функцию, которая будет проверять элемент на чётность. Если элемент чётный, добавляем в новый массив, иначе игнорируем элемент. Callback-функцию можно создавать стрелочным способом.

const arr1 = [2, 3, 42, 15, 99, 5, 8];
const arr2 = [1, 3, 5];
let newArray = [];

function filter(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function evenArray(elem) {
    if (elem % 2 === 0) {
        newArray.push(elem);
    }
}

filter(arr2, evenArray);
console.log(newArray);