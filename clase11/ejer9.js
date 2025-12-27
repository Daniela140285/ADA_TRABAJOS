//Escribe un programa que calcule el Índice de Masa Corporal (IMC)

const prompt = require ('prompt-sync')();

let peso = parseFloat (prompt("ingrese su peso actual en kilogramos: "));
let talla = parseFloat (prompt("ingrese su talla actual en metros: "));

let imc = peso /(talla * talla);
console.log(`Su IMC es de ${imc} kg/m`);
