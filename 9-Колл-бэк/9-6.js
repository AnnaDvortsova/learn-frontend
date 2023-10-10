// ***Задача 9.6***

// Используйте функцию `filter` из предыдущей задачи. Функция `filter` будет принимать массив с числами и строками. Напишите callback-функцию, которая будет проверять тип элемента. Если тип элемента `string`, добавляем в новый массив, иначе игнорируем элемент. Callback-функцию можно создавать стрелочным способом.

const arr1 = [4, "i", 67, "phone", -434, "42"];
const arr2 = [4, 67, -434, 0];
let newArray = [];

function filter(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function elementType(elem) {
    if (typeof elem === 'string') {
        newArray.push(elem);
    }
}

filter(arr2, elementType);
console.log(newArray);


