//ejemplo:programa que simula un loro: repite lo que oye 5 veces.

//1. Importar la librería
const prompt = require ('prompt-sync')();

//2. entrada de datos: le pedimos al usuario la frase que el loro va a "escuchar" para repetir
let mensaje = prompt("Escribí lo que querés que el loro repita: ");
console.log("--El loro comienza a repetir--");

//estructura del FOR (BUCLE)
// El for es ideal para cuando sabemos de antemano cántas veces queremos repetir el ciclo(en este caso:5)
// FOR tiene 3 partes separadas por (;): 
// inicio (let i = 1) creamos un contdor que inicia en 1
// condición (i <= 5): el ciclo sigue MIENTRAS el contador sea menor o igual a 5.
// modificador incremento ++ (i++): al final de cada vuelta, le sumamos 1 al contador

for (let i = 1; i <= 5; i++ ){
    console.log (i + " - " + mensaje);
}

