// *** Задача 8.11 ***
//Написать функцию, принимающую массив чисел.Она должна возвращать`true`, если в массиве все числа двузначные, иначе`false`.

const arr = [18, 95, 36, 37, 42];
const arr2 = [9, 6, 76, 3, 32];


// function every(array) {
// let twoDigitNumber = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] >= 10 && array[i] < 100) {
//             twoDigitNumber++;
//         }
//     }
//     if (twoDigitNumber === array.length) {
//         return true;
//     } else {
//         return false;
//     }
// }

function every(array) {
    let twoDigitNumber = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 10 || array[i] > 99) {
            twoDigitNumber = false;
            break;
        }
    }
    return twoDigitNumber;
}

console.log(every(arr));
