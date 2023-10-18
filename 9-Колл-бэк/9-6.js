// ***Задача 9.6***

// Используйте функцию `filter` из предыдущей задачи. Функция `filter` будет принимать массив с числами и строками. Напишите callback-функцию, которая будет проверять тип элемента. Если тип элемента `string`, добавляем в новый массив, иначе игнорируем элемент. Callback-функцию можно создавать стрелочным способом.

const arr1 = [4, "i", 67, "phone", -434, "42"];
const arr2 = [4, 67, -434, 0];

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

// function elementType(elem) {
//     if (typeof elem === 'string') {
//         return true;
//     } else {
//         return false;
//     }
// }


const elementType = filter(arr1, (elem) => {
    if (typeof elem === 'string') {
        return true;
    } else {
        return false;
    }
});
console.log(elementType);
