//Crea un programa que le pida al usuario un número.
// luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Ingrese un número: "));
console.log(`--Tabla del ${num}--`)

for (let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}