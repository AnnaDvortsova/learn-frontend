// Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.

console.log(Array.isArray([1, 3, 5])); // true
console.log(Array.isArray([])); // true
console.log(Array.isArray(new Array(5))); //true

console.log(Array.isArray()); //false
console.log(Array.isArray(null)); //false
console.log(Array.isArray(undefined)); //false
console.log(Array.isArray(17)); //false
console.log(Array.isArray("Array")); //false
