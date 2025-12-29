/*Ejercicio 1: While 
Crea un programa que solicite al usuario ingresar números continuamente hasta 
que el usuario ingrese un número negativo. Luego, imprime la suma de todos los 
números ingresados. */

const prompt = require ("prompt-sync")();

let suma = 0;
let num = 0;


while (num >= 0){
    num = parseInt(prompt('Ingrese números positivos (el negativo es para terminar): '));

    if(num >= 0){
        suma += num;
    }
}
console.log(`La suma de los números ingresados es de ${suma}`);

