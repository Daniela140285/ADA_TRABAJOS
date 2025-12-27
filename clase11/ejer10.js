// Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. 
// //Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.
const prompt = require ('prompt-sync')();

let precioOriginal = parseFloat (prompt("ingrese el precio original: "));
let descuento = parseFloat (prompt("ingrese porcentaje de descuento: "));
let porcentajeDesc = 100 - descuento;

let precioFinal = precioOriginal * (porcentajeDesc / 100);
console.log(`El producto que usted quiere, con el descuento, le queda en $ ${precioFinal}`);
