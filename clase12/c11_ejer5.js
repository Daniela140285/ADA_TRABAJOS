//Escribe un programa que le pida al usuario dos números enteros (inicio y fin).
//El programa debe mostrar todos los números pares que se encuentran entre esos dos valores,incluyendo los límites si son pares.
//Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.

const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Ingrese un número entero: "));
let num2 = parseInt(prompt("Ingrese un otro número entero: "));

if (num1 > num2) {
  console.log('Los valores son inválidos');
} else {
    console.log(`los número pares entres ${num1} y ${num2} :`);
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


