const prompt = require ('prompt-sync')();

//pide al usuario que ingrese dos números y muestra cúal es mayor o si son iguales.

let numer1 = parseFloat(prompt ("Ingrese un número "));
let numer2 = parseFloat(prompt ("Ingrese otro número "));

 if (numer1 === numer2){
    console.log("ingresó 2 números inguales ");
 } else if (numer1 > numer2) {
    console.log("el primer número es más grande ");
 } else{
    console.log("el segundo número es más grande ")
 }
