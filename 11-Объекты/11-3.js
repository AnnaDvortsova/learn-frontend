// ***Задача 11.3***

// Используя объект из предыдущего задания, вывести в консоль все значения его свойств.

const dog = {
    name: "Рекс",
    age: 3,
    breed: "Немецкая овчарка",
    city: "Москва",
    address: "ул. Ленина, 2",
};

//output
// "Рекс"
// 3
// "Немецкая овчарка"
// "Москва"
// "ул. Ленина, 2"

const values = Object.values(dog);
values.forEach((elem) => console.log(elem));