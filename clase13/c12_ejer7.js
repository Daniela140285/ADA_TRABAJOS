/*Ejercicio 7: Matriz 5x5 
Declara una variable que contenga una matriz de 5x5 llena de puros números 
enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en 
la matriz. 
*/
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
    [8, 9, 23, 5, 7, 1],
    [11, 15, 89, 124, 32, 3]
];

let suma = 0;

for (let i = 0; i < matriz.length; i++) {           //recorre filas
    for (let j = 0; j < matriz[i].length; j++) {    // recorre columnas
        suma = suma + matriz[i][j];                 //matriz[i][j] → número en esa posición
    }
}
console.log(`La suma total es: ${suma}`);