// metodos con arrays
const practiceArray = [
    10, "JavaScript", true, 42, "code", false, 8, "learn", 15, "practice",
    "array", 99, "function", 3, 7, "syntax", "methods", 23, 5, "challenge",
    true, "developer", 56, "debug", false, 12, "loop", 88, "algorithm", 32
];

const numbersArray = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

const stringsArray = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango", "nectarine"];

console.log("-------------------");

// metodo pop()
// elimina el ultimo elemento de un array y lo devuelve

// practica: 

practiceArray.pop() // elimina el ultimo elemento de practiceArray / 32
console.log(practiceArray);

let count = 15
for (let i = 0; i > count; i++) {
    numbersArray.pop()
}
console.log(numbersArray);


console.log("-------------------");

// metodo push()
// agrega un elemento al final de un array y lo devuelve

// practica:

console.log("-------------------");

// metodo shift()
// elimina el primer elemento de un array y lo devuelve

// practica:

console.log("-------------------");

// metodo unshift() 
//Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.

// practica:

console.log("-------------------");

// metodo forEach()
// recibe una funcion y un array, y ejecuta la funcion para cada elemento del array

// practica:

console.log("-------------------");

// metodo every()
// recibe una funcion y un array, y devuelve true si la funcion devuelve true para todos los elementos
// del array, false en caso contrario

// practica:

console.log("-------------------");

// metodo find()
// nos permite buscar un elemento en un array y devuelve el indice de ese elemento

// practica:

console.log("-------------------");

// metodo post()
// nos indica si un elemento existe en un array como booleano - se puede combinar con metodo include()

// practica:

console.log("-------------------");

// metodo map()
// es similar a como funciona un bucle pero de manera declarativa

// practica:

console.log("-------------------");

// metodo filter()
// filtra los elementos de un array que cumplen una condicion dada

// practica:

console.log("-------------------");

// metodo reduce()
// reduce() es un metodo que recibe una funcion y un array, y devuelve un valor que es el resultado
// de aplicar la funcion a cada elemento del array, acumulando el resultado en un valor inicial

// practica:

console.log("-------------------");

// metodo from()
// crea un nuevo array a partir de un objeto iterable

// practica:

console.log("-------------------");