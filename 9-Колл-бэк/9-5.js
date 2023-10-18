// ***Задача 9.5 (аналог метода filter)***

// - Напишите функцию `filter`, которая будет первым параметром принимать массив, вторым - callback-функцию, которая будет применяться к каждому элементу и индексу элемента массива по очереди. `filter` должна возвращать новый отфильтрованный массив по условиям, описанных в callback-функции, иначе возвращает пустой массив `[]`.
// - Передайте в созданную функцию `filter` числовой массив, а в качестве callback-функции - функцию, которая будет проверять элемент на чётность. Если элемент чётный, добавляем в новый массив, иначе игнорируем элемент. Callback-функцию можно создавать стрелочным способом.

const arr1 = [2, -3, 42, 15, -99, -5, 8];
const arr2 = [1, 3, 5];

function filter(array, callback) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const elem = array[index];
        const result = callback(elem, index);
        if (result) {
            newArray.push(elem);
        }
    }
    return newArray;
}

// function evenArray(elem) {
//     if (elem % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

const evenArray = filter(arr1, (elem) => {
    if (elem % 2 === 0) {
        return true;
    } else {
        return false;
    }
});
console.log(evenArray);