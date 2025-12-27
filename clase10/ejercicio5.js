//Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres.

const prompt = require ('prompt-sync')();

let num1 = parseFloat(prompt ("Ingrese un primer número "));
let num2 = parseFloat(prompt ("Ingrese un segundo número, distino al primero: "));
let num3 = parseFloat(prompt ("Ingrese un tercer número, distinto a los anteriores: "));

if (num1 > num2 && num1 > num3){
    console.log("el primer número ingresado es el mayor");
} else if (num2 > num1 && num2 > num3){
    console.log("el segundo número ingresado es el mayor");
} else{
    console.log("el tercer número ingresado es el mayor")
}