//Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre.

const prompt = require ('prompt-sync')();

let nombre = prompt("Ingrese su nombre: ") ;//=== 'Daniela'

if (nombre === 'Daniela'){
console.log("El nombre que ingresaste es igual al mío");     
} else {
console.log ("ingresaste un nombre distinto al mío");
}
