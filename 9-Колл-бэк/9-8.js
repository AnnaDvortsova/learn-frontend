// ***Задача 9.8***

// Используйте функцию `find` из предыдущей задачи. Функция `find` будет принимать числовой массив. Напишите callback-функцию, которая будет проверять элемент на условие - его остаток от деления на `5` должен равняться `3`. Если элемент удовлетворяет условию, возвращает `true`, иначе `false`. Callback-функцию можно создавать стрелочным способом.

const arr1 = [3, 8, 13, 18];
const arr2 = [4, 7, 9, 10];

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

// function modulo(elem) {
//     if (elem % 5 === 3) {
//         return true;
//     } else {
//         return false;
//     }
// }

const modulo = find(arr1, (elem) => {
    if (elem % 5 === 3) {
        return true;
    } else {
        return false;
    }
});
console.log(modulo);