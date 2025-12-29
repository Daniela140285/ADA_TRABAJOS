/*Ejercicio 5: Uso de Arrays y Condicionales 
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en 
un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se 
encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su 
desarrollo)
*/
const prompt = require('prompt-sync')();

let nombres = [];

//Pedimos los 5 nombres y los guardamos
for (let i = 0; i < 5; i ++){
    nombres[i] = prompt(`Ingrese 5 nombres: ${i + 1} `);
}
let encontrado = false;  //false → todavía no lo encontramos. Si aparece → lo cambiamos a true

// buscamos el nombre
let nombreBuscado = prompt('Ingese un nombre para buscar: ');

for ( let i = 0; i < 5; i++){
    if (nombres [i] === nombreBuscado){
        encontrado = true;
    }
}

// Mostramos el resultado
if (encontrado) {
    console.log("El nombre se encuentra en el array.");
} else {
    console.log("El nombre NO se encuentra en el array.");
}





    
