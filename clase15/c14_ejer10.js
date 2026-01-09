/*●	Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
1.	Inicializa un array vacío para almacenar las flores favoritas.
2.	Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
3.	Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
4.	Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).
*/

const prompt = require('prompt-sync')();

//inicializamos el array
let floresFavoritas =[];

//asignacion manual
floresFavoritas[0] = prompt("Ingresa tu flor favorita 1: "); //posicion 0
floresFavoritas[1] = prompt("Ingresa tu flor favorita 2: ");//posicion 1
floresFavoritas[2] = prompt("Ingresa tu flor favorita 3: "); //posicion 2

//datos de búsqueda
let florBuscada = prompt("Ingresa una flor para buscar: ");

// contador
let contador = 0;

//recorrido del array (bucle)
for (let i = 0; i <floresFavoritas.length; i++){

    //comparacion: en cada vuelta verificamos si el elemento guardado en la posición actual (floresFavoritas[1] es identico a lo que buscamos)
    if (floresFavoritas[i] === florBuscada) {

        //incremento: si hay coincidencia aumenta 1
        contador++  // es igual que poner contador = contador + 1
    }

}
console.log(`La flor buscada ${florBuscada} aparece ${contador} veces.`);