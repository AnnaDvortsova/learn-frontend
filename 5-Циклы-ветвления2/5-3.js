// ***Задача 3***
// Выведете матрицы как в предыдущем задании, но размер матрицы должен быть заранее задан переменной n (n строк, n столбцов).

let n = 6;

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        if (i < n / 2) {
            str = str + '0';
        } else {
            str = str + '1';
        }
    }
    console.log(str);
}

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        if (j < n / 2) {
            str = str + '1';
        } else {
            str = str + '0';
        }
    }
    console.log(str);
}

for (let i = 0; i < n; i++) {
    let str = '';
    if (i >= n / 2) {
        for (let j = 0; j < n; j++) {
            if (j < n / 2) {
                str = str + '0';
            } else {
                str = str + '1';
            }
        }
    }
    if (i < n / 2) {
        for (let j = 0; j < n; j++) {
            if (j < n / 2) {
                str = str + '1';
            } else {
                str = str + '0';
            }
        }
    }
    console.log(str);
}