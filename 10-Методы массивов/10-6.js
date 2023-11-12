// ***Задача 10.6***

// Напишите функцию, которая разделяет массив на части заданного размера.
const arr = [1, 2, 3, 4, 5];
console.log(chunks(arr, 2)); // [[1, 2], [3, 4], [5]]
console.log(chunks(arr, 3)); // [[1, 2, 3], [4, 5]]

function chunks(array, n) {
    let newArray = [];
    for (let index = 0; index < array.length; index += n) {
        const chunk = array.slice(index, index + n);
        newArray.push(chunk); // [1, 2]
        //arr.slice(index + n, index + 2 * n) // [3, 4]
        //arr.slice(index + 2 * n, index + 3 * n) // [5]
    }
    return newArray;
}

