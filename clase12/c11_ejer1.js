//Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. 
//Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

const prompt = require ('prompt-sync')();

let num = parseInt (prompt('Ingrese un número cualquiera: '));//se le pide al usuario que ingrese el numero que desee

if (num === 0 ){ // se evalúa si ese número es estrictamente igual a cero)
    console.log('El número ingresado es cero');
} else if (num > 0 ){ // sino, si el número es mayor a cero, es numero positivo.
    console.log('El número ingresado es positivo');
} else{ // sino es número negativo.
    console.log('El número ingresado es negativo');
}

// If ternario
let num2 = parseFloat (prompt('Ingrese un número cualquiera: '));

let respuesta = (num2 === 0) ? 'El número ingresado es cero' : (num2 > 0) ? 'el número ingresado es positivo' : 'El numero es negativo';
console.log(respuesta);