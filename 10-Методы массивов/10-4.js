// ***Задача 10.4***

// Напишите функцию, которая убирает повторяющиеся элементы в массиве. Постараться сохранить исходный порядок элементов в массиве.

const arr = [1, 2, 2, 3, 3, 4, 5, 6, 6];
const newArr = unique(arr);
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

function unique(array) {
    const newArray = array.filter((element, index, arr) => arr.indexOf(element) === index);
    // let newArray = [];
    // array.forEach((element) => {
    //     if (!newArray.includes(element)) {
    //         newArray.push(element);
    //     }
    // });


    // for (let i = 0; i < array.length; i++) {
    //     if (!newArray.includes(array[i])) {
    //         newArray.push(array[i]);
    //     }
    // }
    return newArray;
}