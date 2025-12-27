const prompt = require("prompt-sync")({ sigint: true });

//Escribe un programa que calcule el precio final de un producto después
//de aplicar un descuento. Pide al usuario que ingrese el precio original
//del producto y el porcentaje de descuento, y muestra el precio final

//1. pedir al usuario el precio original del producto
let precioOriginal = parseFloat(prompt("ingresa el precio original del producto:"));

//2.pedir al usuario el porcentaje de descuento
let porcentajeDescuanto = parseFloat(prompt("ingresa el procentaje de descuento:"));

//3. calcular el descuento
let descuento = (precioOriginal * porcentajeDescuanto) / 100;

//4. calcular el precio final
let precioFinal = precioOriginal - descuento;

//5. mostrar el precio final al cliente
console.log(`El precio final con el descuento es: ${precioFinal}`);
