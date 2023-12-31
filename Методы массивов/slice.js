// Метод slice() возвращает новый массив, содержащий копию части исходного массива.

const fruits = ["Банан", "Апельсин", "Лимон", "Яблоко", "Манго"];

console.log(fruits.slice(1, 3)); // ['Апельсин', 'Лимон']
console.log(fruits.slice(3)); // ['Яблоко', 'Манго']
console.log(fruits.slice(1, -1)); // ['Апельсин', 'Лимон', 'Яблоко']
console.log(fruits.slice()); // ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго']