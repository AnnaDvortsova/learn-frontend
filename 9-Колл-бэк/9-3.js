// ***Задача 9.3 (аналог метода map)***

// - Напишите функцию `map`, которая будет первым параметром принимать массив, вторым - callback-функцию, которая будет применяться к каждому элементу и индексу элемента массива по очереди. `map` должна возвращать новый массив.
// - Передайте в созданную функцию `map` числовой массив, а в качестве callback-функции - функцию, которая будет высчитывать квадрат каждого элемента и добавлять его в новый массив. Callback-функцию можно создавать стрелочным способом.

const arr = [2, 3, 4, 5];

function map(array, callback) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const elem = array[index];
        const result = callback(elem, index);
        newArray.push(result);
    }
    return newArray;
}

// function squareCallbackFunction(elem) {
//     return elem * elem;
// }

const squareFunction = map(arr, (elem) => {
    return elem * elem;
});
console.log(squareFunction);

// const squareFunction1 = arr.map((elem) => {
//     return elem * elem;
// });
// console.log(squareFunction1);
// метод массива