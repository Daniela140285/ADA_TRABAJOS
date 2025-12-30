/*Ejercicio 4: Ciclo For - Array 
Crear un programa que permita registrar las notas de varios estudiantes usando 
arrays y mostrarlas por pantalla: 
1. Crear un array para almacenar las notas. 
2. Define un array vacío llamado notas donde almacenaremos las notas de los 
estudiantes. 
3. Pide al usuario que ingrese las notas de varios estudiantes una por una 
utilizando el método prompt. 
4. Usa un bucle for para solicitar las notas y asignarlas directamente a 
posiciones específicas del array notas. 
5. Imprime en consola las notas ingresadas usando el array notas.
*/
const prompt = require('prompt-sync')();

let notas = []; 
let cantidad = 4; //cantidad de notas a ingresar, Esto controla cuántas veces se repite el for.

for (let i = 0; i < cantidad; i ++){
    let ingresoNota = parseInt(prompt(`Ingrese la nota del estudiante ${i +1}: `)); //VER MÁS ABAJO
    notas[i] = ingresoNota;    //Guardamos la nota en el array. notas[i] significa: en la lista notas, en el casillero numero i
}
console.log("Las notas ingresadas son:");
console.log(notas);



/*Si mostráramos esto:
prompt("Ingrese la nota del estudiante " + i);
El usuario vería:Ingrese la nota del estudiante 0
*/