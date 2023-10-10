// ***Задача 9.7 (аналог метода find)***

// - Напишите функцию `find`, которая будет первым параметром принимать массив, вторым - callback-функцию, которая будет применяться к каждому элементу и индексу элемента массива по очереди. `find` должна возвращать первый найденный элемент по условиям, описанных в callback-функции, иначе - `undefined`.
// - Передайте в созданную функцию `find` массив строк, а в качестве callback-функции - функцию, которая будет проверять элемент на равенство строке `“apple”.` Если элемент равен строке `“apple”`, сразу возвращаем его. Если в массиве нет искомой строки, то возвращаем `undefined`. Callback-функцию можно создавать стрелочным способом.

const arr1 = ["apricot", "banana", "kiwi", "lime", "apple", "mango"];
const arr2 = ["apricot", "banana", "kiwi", "lime", "42", "mango"];

function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function appleString(elem) {
    if (elem === 'apple') {
        console.log(elem);
    }

}

find(arr1, appleString);
find(arr2, appleString);
