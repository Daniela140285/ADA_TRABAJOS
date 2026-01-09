/*●	Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.
*/

const prompt = require('prompt-sync')();

let precio = parseFloat(prompt("Ingrese el precio de un producto: "));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA: "));

const precioFinal = (precio, iva) => precio + (precio * iva / 100);
console.log(`El precio final de su producto es de ${precioFinal(precio,iva)}`)

/*--------precioFinal 👉 es una función
----------Para que calcule algo, tenés que llamarla con paréntesis y valores
*/