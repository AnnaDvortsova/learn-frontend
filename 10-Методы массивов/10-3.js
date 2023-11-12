// ***Задача 10.3***

// Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки (””), ноль (0), null.

const arr = [1, false, "42", "", null, 67, undefined, -45, 0, "apple"];
const newArr = withoutEmpty(arr);
console.log(newArr); // [1, "42", 67, -45, "apple"]

function withoutEmpty(array) {
    const newArray = array.filter((elem) => elem);

    // let newArray = [];
    // array.forEach((element) => {
    //     if (Boolean(element)) {
    //         newArray.push(element);
    //     }
    // });

    // for (let i = 0; i < array.length; i++) {
    //     if (Boolean(array[i])) {
    //         newArray.push(array[i]);
    //     }
    // }
    return newArray;
}