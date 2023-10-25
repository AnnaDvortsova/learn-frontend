// ***Задача 9.4***

// Используйте функцию `map` из предыдущей задачи. Функция `map` будет принимать числовой массив, который состоит только из 1 и 0 в случайном порядке. Напишите callback-функцию, которая будет инвертировать элемент предыдущего массива и записывать его в новый. Callback-функцию можно создавать стрелочным способом.

const arr = [1, 1, 0, 0, 1, 0, 1];

function map(array, callback) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const elem = array[index];
        const result = callback(elem, index);
        newArray.push(result);
    }
    return newArray;
}

// function inversion(elem) {
//     if (elem === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

const inversion = map(arr, (elem) => {
    if (elem === 0) {
        return 1;
    } else {
        return 0;
    }
});
console.log(inversion);

// const inversion1 = arr.map((elem) => {
//     if (elem === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// });
// console.log(inversion);
// метод массива
