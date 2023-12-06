// ***Задача 11.11***

// Допустим, что с бекенда приходит массив объектов, в которых одним из свойств является объект пользователей `user`. Написать функцию, которая будет принимать данный массив и возвращать массив объектов `user`. При выполнении задачи исходный массив самостоятельно дополнить 4-5 объектами.

// input
const arr = [
    {
        id: 1,
        user: {
            id: 101,
            name: "Юрий",
            age: 28,
        },
        city: "Москва",
        role: "author",
    },
    {
        id: 2,
        user: {
            id: 102,
            name: "Юлия",
            age: 20,
        },
        city: "Санкт-Петербург",
        role: "reader",
    },
    {
        id: 3,
        user: {
            id: 103,
            name: "Анна",
            age: 30,
        },
        city: "Тверь",
        role: "reader",
    },
    {
        id: 4,
        user: {
            id: 104,
            name: "Наталья",
            age: 25,
        },
        city: "Томск",
        role: "author",
    },
    {
        id: 5,
        user: {
            id: 105,
            name: "Марк",
            age: 19,
        },
        city: "Воронеж",
        role: "reader",
    },
    {
        id: 6,
        user: {
            id: 106,
            name: "Петр",
            age: 60,
        },
        city: "Москва",
        role: "author",
    }
];

// output
// [
// 	{
// 		id: 101,
// 		name: "Юрий",
// 		age: 28,
// 	},
//  {
// 		id: 102,
// 		name: "Юлия",
// 		age: 20,
// 	},
// 	...
// ]

function newArrayObject(array1) {
    const newArray = array1.map((elem) => elem.user)
    return newArray;
};

console.log(newArrayObject(arr));