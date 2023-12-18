// ***Задача 11.4***

// Используя объект из предыдущего задания, вывести в консоль имя и значение каждого свойства.

const dog = {
    name: "Рекс",
    age: 3,
    breed: "Немецкая овчарка",
    city: "Москва",
    address: "ул. Ленина, 2",
};

//output
// "name: Рекс"
// "age: 3"
// "breed: Немецкая овчарка"
// "city: Москва"
// "address: ул. Ленина, 2"

const nameValues = Object.entries(dog);
nameValues.forEach((elem) => console.log(`${elem[0]}: ${elem[1]}`));

// for (const nameProp in dog) {
//     console.log(`${nameProp}: ${dog[nameProp]}`)
// }