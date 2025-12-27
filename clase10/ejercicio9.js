//Define una constante PI con el valor de pi (3.14159). 
// Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI. 

const prompt = require ('prompt-sync')();
const PI = 3.14159;

let radio = parseFloat(prompt("Ingrese el valor del radio de un círculo: "));

let area = PI * (radio* radio);
console.log(`El área del círculo es de ${area} cm`)

let perimetro = PI * 2 * radio;
console.log(`El perímetro del círculo es de ${perimetro} cm`)
