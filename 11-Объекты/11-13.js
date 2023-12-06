// ***Задача 11.13***

// Дан объект. Написать функцию, которая будет возвращать новый объект, в котором имена и значения свойств поменяются местами. Для решения задачи потребуется метод объектов, который в практикуме не описывался, его можно найти в документации.

// input
const dog = {
    name: "Рекс",
    age: 3,
    home: "Москва",
};

// output
// const dog = {
// 	"Рекс": "name",
// 	"3": "age",
// 	"Москва": "home",
// };

// function revers(object) {
//     const array = Object.entries(object);
//     let newObject = {};
//     array.forEach((element) => newObject[element[1]] = element[0]);

//     // for (let i = 0; i < array.length; i++) {
//     //     const elem = array[i];
//     //     newObject[elem[1]] = elem[0];
//     // }
//     return newObject;
// }

// console.log(revers(dog));

function revers(object) {
    const array = Object.entries(object);
    const array1 = array.map((elem) => {
        const newArray = [elem[1], elem[0]];
        return newArray;
    });

    const newObject = Object.fromEntries(array1);

    return newObject;
}

console.log(revers(dog));