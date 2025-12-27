//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección.
//Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.

const prompt = require ('prompt-sync')();

const RANGO_MINIMO = 0;
const RANGO_MAXIMO = 100;

let numeroIngresado = parseFloat(prompt("ingrese un número "));

if ( numeroIngresado >= RANGO_MINIMO && numeroIngresado <= RANGO_MAXIMO ) {
    console.log("su número está dentro de los rangos definidos");
} else{
    console.log("su número está fuera de los rangos definidos");
}
