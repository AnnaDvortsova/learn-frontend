// *** Задача 10.2 ***

//Напишите функцию, которая сравнивает два массива, если они равны, вернуть true, иначе false.

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
console.log(isEqual(arr1, arr2)); // true

function isEqual(arr1, arr2) {
    let result = true;
    if (arr1.length !== arr2.length) {
        result = false;
    } else {
        result = arr1.every((elem, index) => (elem === arr2[index]));

        //for (let i = 0; i < arr1.length; i++){
        //  if (arr1[i] !== arr2[i]){
        //    result = false;
        //    break;
        //  }
        //}
    }
    return result;
}