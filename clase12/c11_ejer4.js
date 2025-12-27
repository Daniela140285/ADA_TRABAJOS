//Los números pueden ser pares o impares. 
// Escribe un programa que le pida al usuario un número y determine si es par o impar. 
//Muestra un mensaje explicativo indicando qué significa cada caso.

const prompt = require ('prompt-sync')(); //prompt necesario para interacturar con el usuario

let num = parseInt (prompt('Ingrese un número: '));// se le pide un número al usuario y lo convierto a entero para poder evaluar si es par o impar
if (num % 2 === 0){ //si ese número al ser dividido x 2 da resto 0, es par
    console.log('El número ingresado es par');
} else { // sino, es impar
    console.log('El número ingresado es impar');
}


let num2 = parseInt (prompt('Ingrese un número: '));// se le pide un número al usuario y lo convierto a entero para poder evaluar si es par o impar

let respuesta = (num2 % 2 === 0) ? 'el numero ingresado es par': ' el número ingresado es impar';
console.log(respuesta)