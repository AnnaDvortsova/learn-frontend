// ***Задача 9.2***

// Используйте функцию `forEach` из предыдущей задача. Напишите callback-функцию, которая будет для каждого элемента числового массива рассчитывать сумму элемента с его индексом и выводить в консоль. Callback-функцию можно создавать стрелочным способом.

const arr = [1, 2, 3, 4, 5];

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

// function sum(elem, index) {
//     let result = elem + index;
//     console.log(`${elem} + ${index} = ${result}`);
// }

forEach(arr, (elem, index) => {
    let result = elem + index;
    console.log(`${elem} + ${index} = ${result}`);
});

// arr.forEach((elem, index) => {
//     let result = elem + index;
//     console.log(`${elem} + ${index} = ${result}`);
// });
// метод массива