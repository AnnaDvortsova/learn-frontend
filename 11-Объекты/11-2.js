// ***Задача 11.2***

// Допустим, что с бекенда приходит массив объектов со свойствами: `{n: “Алексей”, a: 24, h: “Москва”, p: “курьер”, c: “Toyota”}`. Написать функцию, которая будет возвращать новый массив объектов, в которых имена свойств будут соответствовать их значениям, например, `n` заменится на `name` и т.д. При выполнении задачи исходный массив самостоятельно дополнить 4-5 объектами.

// input
const arr = [
    { n: "Алексей", a: 24, h: "Москва", p: "курьер", c: "Toyota" },
    { n: "Евгения", a: 32, h: "Тюмень", p: "юрист", c: "Nissan" },
    { n: "Анна", a: 30, h: "Тверь", p: "вэб-разработчик", c: "Audi" },
    { n: "Владимир", a: 68, h: "Кесова Гора", p: "водитель", c: "Mercedes" },
    { n: "Максим", a: 40, h: "Санкт-Петербург", p: "бизнесмен", c: "BMW" },
    { n: "Елена", a: 43, h: "Москва", p: "парикмахер", c: "Chevrolet" },
];

function newArrayObject(array1) {
    const newArray = array1.map((elem) => {
        let newObject = {};
        newObject.name = elem.n;
        newObject.age = elem.a;
        newObject.home = elem.h;
        newObject.position = elem.p;
        newObject.car = elem.c;
        return newObject;
    });

    return newArray;
    // let newArray = [];
    // for (let i = 0; i < array1.length; i++) {
    //     let newObject = {};
    //     newObject.name = array1[i].n;
    //     newObject.age = array1[i].a;
    //     newObject.home = array1[i].h;
    //     newObject.position = array1[i].p;
    //     newObject.car = array1[i].c;
    //     newArray.push(newObject);
    // }
    // return newArray;
}

console.log(newArrayObject(arr));