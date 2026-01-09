/*●	Ejercicio 5: Verificar origen del auto
Solicita al usuario ingresar la marca de un auto y utiliza una función flecha para verificar y mostrar si el auto es de origen nacional o importado. Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen nacional.
*/
const prompt = require('prompt-sync')();

let auto = prompt("Ingrese la marca de un auto: ").toLowerCase();

const origenAuto = auto => {
    if (auto === "chevrolet" || auto === "ford" || auto === "fiat"){
    return "Nacional";  
    }
    return "Importado";    
}
console.log(origenAuto(auto));