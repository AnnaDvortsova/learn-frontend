// ***Задача 11.1***

// Даны два массива, в первом перечислены по порядку названия фильмов, во втором - режиссёры этих фильмов. Написать функцию, которая будет принимать эти два массива, возвращать массив объектов со свойствами: название фильма и режиссёр.

// input
const movieTitles = ["Зеленая миля", "Побег из Шоушенка", "Форрест Гамп", "1+1", "Список Шиндлера"];
const movieDirectors = ["Фрэнк Дарабонт", "Фрэнк Дарабонт", "Роберт Земекис", "Оливье Накаш", "Стивен Спилберг"];

// output
// [
//     { title: "Зеленая миля", director: "Фрэнк Дарабонт" },
//     { title: "Побег из Шоушенка", director: "Фрэнк Дарабонт" },
//     { title: "Форрест Гамп", director: "Роберт Земекис" },
//     { title: "1+1", director: "Оливье Накаш" },
//     { title: "Список Шиндлера", director: "Стивен Спилберг" },
// ]

function movies(array1, array2) {
    const result = array1.map((elem, index) => {
        let newObject = {};
        newObject.title = elem;
        newObject.director = array2[index];
        return newObject;
    });
    return result;

    // let newArray = [];
    // for (let i = 0; i < array1.length; i++) {
    //     let newObject = {};
    //     newObject.title = array1[i];
    //     newObject.director = array2[i];
    //     newArray.push(newObject);
    // }
    // return newArray;
}

console.log(movies(movieTitles, movieDirectors));