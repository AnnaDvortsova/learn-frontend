// ***Задача 9.7 (аналог метода find)***

// - Напишите функцию `find`, которая будет первым параметром принимать массив, вторым - callback-функцию, которая будет применяться к каждому элементу и индексу элемента массива по очереди. `find` должна возвращать первый найденный элемент по условиям, описанных в callback-функции, иначе - `undefined`.
// - Передайте в созданную функцию `find` массив строк, а в качестве callback-функции - функцию, которая будет проверять элемент на равенство строке `“apple”.` Если элемент равен строке `“apple”`, сразу возвращаем его. Если в массиве нет искомой строки, то возвращаем `undefined`. Callback-функцию можно создавать стрелочным способом.

const arr1 = ["apricot", "banana", "kiwi", "lime", "apple", "mango"];
const arr2 = ["apricot", "banana", "kiwi", "lime", "42", "mango"];

function find(array, callback) {
    for (let index = 0; index < array.length; index++) {
        const elem = array[index];
        const result = callback(elem, index);
        if (result) {
            return elem;
        }
    }
    return undefined;
}

// function appleString(elem) {
//     if (elem === 'apple') {
//         return true;
//     } else {
//         return false;
//     }
// }

const appleString = find(arr1, (elem) => {
    if (elem === 'apple') {
        return true;
    } else {
        return false;
    }
});
console.log(appleString);