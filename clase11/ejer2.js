//Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje personalizado que incluya toda esta información. 

const prompt = require ('prompt-sync')();

let nombre = prompt ("Ingese su nombre: ");
let edad = parseInt(prompt ("Ingese su edad: "));
let peso = parseFloat(prompt ("Ingese su peso: "));

console.log(`Usted se llama ${nombre}, tiene ${edad} años y pesa ${peso} kg`);