/*Ejercicio 2: Análisis y Modificación de Cadenas de Texto 
Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que 
haga lo siguiente: 
1. Quite los espacios en blanco al principio y al final. 
2. Divida la oración en palabras. 
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” que indica 
que se debe buscar todas las apariciones del carácter 'a' en la cadena (la bandera g 
es para global, lo que significa que reemplazará todas las apariciones, no solo la 
primera). 
4. Encuentre la posición de la primera aparición de la palabra "javascript". De no 
aparecer retornar -1 
5. Convierta la oración a una cadena de palabras separadas por guiones.*/

const prompt = require('prompt-sync')();
let oracion = prompt("Escribe una oración: ");

function procesarOracion (oracion) {
    //LIMPIAR DATOS: eliminar espacios en blanco con .trim
    let sinEspacios = oracion.trim();

    //separar texto,convertir a array
    let palabras = sinEspacios.split(" ");

    //reemplazo global
    let reemplazo = sinEspacios.replace(/a/g, '@'); //copio de clase 

    //busqueda de posicion
    let buscarJS = sinEspacios.indexOf("javascript");

    //union de array
    let guiones = palabras.join("-");

    //mostrar resultados en consola
    console.log("Oración con reemplazos: ", reemplazo);
    console.log("Buscar JS: ", buscarJS);
    console.log("Oración con guiones: ", guiones);
};
procesarOracion(oracion);