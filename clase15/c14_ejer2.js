/* ●	Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.
*/
const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Ingrese la calificaión 1: "));
let nota2 = parseFloat(prompt("Ingrese la calificaión 2: "));
let nota3 = parseFloat(prompt("Ingrese la calificaión 3: "));
let nota4 = parseFloat(prompt("Ingrese la calificaión 4: "));
let nota5 = parseFloat(prompt("Ingrese la calificaión 5: "));

const promedio = (nota1, nota2, nota3, nota4, nota5) => (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
console.log(`El promedio de las calificaciones es de ${promedio(nota1, nota2, nota3, nota4, nota5)}`);