// ***Задача 10.1***

// Даны два массива. Написать функцию, которая будет из первого массива удалять все значения второго, возвращая новый массив. Порядок оставшихся элементов должен сохраняться.

const arr = arrayDiff([1, 2, 5, 9], [1, 9]);
console.log(arr); // [2, 5]

const arr2 = arrayDiff([1, 4, 4, 3], [2, 4, 3, 1]);
console.log(arr2); // []


function arrayDiff(array1, array2) {
    const newArray = array1.filter((elem) => (!array2.includes(elem)));

    //array1.forEach((elem) => {
    //   if (!array2.includes(elem)){
    //      newArray.push(elem);
    //   }
    //});

    //for (let i = 0; i < array1.length; i++) {
    //   if (!array2.includes(array1[i])){
    //      newArray.push(array1[i]);
    //   }
    //}
    return newArray;
}