// ***Задача 4***
// Дано чётное n. С помощью одного цикла выведете половину нулей и половину единиц. Подсказка: думайте на каком шаге цикла вы находитесь в данный момент, номер шага - это i. Подумайте, как понять прошли мы уже половину шагов и пора выводить единицу или ещё не прошли и нужно выводить 0.

const n = 10;
let str = '';

for (let i = 0; i < n; i++) {
    if (i < (n / 2)) {
        str = str + '0';
    }
    if (i >= (n / 2)) {
        str = str + '1';
    }
}

console.log(str);