//Verificar si una persona es mayor

const prompt = require ('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad: "));

let  mensaje = (edad >= 18) ? 'Usted puede ingresar porque es mayor de edad': 'Es menor de edad, no puede ingresar';

console.log(mensaje);
