// ***Задача 10.5***

// Написать функцию, которая будет искать массив внутри двумерного массива и возвращать индекс найденного элемента, иначе возвращает `-1`.

// Двумерным массивом в JS является массив, элементами которого являются массивы. Например, `[[0, 0, 0], [1, 1, 1], [2, 2, 2]].`

const twoDimArray = [[0, 0, 0], [1, 1, 1], [2, 2, 3]];
const query1 = [1, 1, 1];
const result1 = indexOfArray(twoDimArray, query1);
console.log(result1); // 1

const query2 = [4, 4, 4];
const result2 = indexOfArray(twoDimArray, query2);
console.log(result2); // -1

function isEqual(arr1, arr2) {
    let result = true;
    if (arr1.length !== arr2.length) {
        result = false;
    } else {
        result = arr1.every((elem, index) => (elem === arr2[index]));
    }
    return result;
}

function indexOfArray(array1, array2) {
    const result = array1.findIndex((element) => isEqual(element, array2));
    return result;

    // for (let i = 0; i < array1.length; i++) {
    //     for (let j = 0; j < array1[i].length; j++) {
    //         if (array2[i] === array1[i][j]) {
    //             return i;
    //         }
    //     }
    // }
    // return -1;
}