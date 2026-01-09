/*●	Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.
*/
const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese una edad: "));

const edadClasificada = (edad) => edad < 13 ? "es niño" : edad < 18 ? "es adolescente" : edad < 60 ? "es adulto" : "es adulto mayor"; 
console.log(`Según la edad igresada ${edadClasificada(edad)}`);

// resolución con if comun

const clasificarEdad = edad => {
    if (edad <13) return "Niño";
    if (edad <18) return "Adolescente";
    if (edad <60) return "Adulto";
    return "Adulto Mayor";
}