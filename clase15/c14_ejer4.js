/*●	Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad
*/

const prompt = require('prompt-sync')();

let compras = parseInt(prompt("Cúantos productos compró?: "));
let precioUnit = parseFloat(prompt("Precio unitario: "));

const totalConDesc = (compras, precioUnit) =>{
    let total = compras * precioUnit;
    if (compras > 5){
        return total * 0.90;
    }
    return total;
}
console.log (`Total a pagar ${totalConDesc(compras, precioUnit)}`);

// NO ENTEDI LA LOGICA PARA RESOLVER ESTE EJERCICIO