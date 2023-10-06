// ***Задача 1***
// Выведете такую матрицу 5x5:

for (let i = 0; i < 5; i++) {
    let str = '';
    for (let j = 0; j < 5; j++) {
        str = str + ' ' + (i + '/' + j);
    }
    console.log(str);
}