// ***Задача 3***
// Использовав два цикла выведете на экран прямоугольник из нулей - 3 строки, 8 столбцов:

let str = '';

for (let i = 0; i < 3; i++) {
    let str = '';
    for (let j = 0; j < 8; j++) {
        str = str + '0';
    }
    console.log(str);
}