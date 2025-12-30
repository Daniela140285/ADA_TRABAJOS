/*Ejercicio 1: While 
Crea un programa que solicite al usuario ingresar números continuamente hasta 
que el usuario ingrese un número negativo. Luego, imprime la suma de todos los 
números ingresados. */

const prompt = require ("prompt-sync")();

let suma = 0;       //es como arrancancar con una alcancía vacía donde le vamos guardoando todo. 
let num = 0;        // inicializamos con una variable en 0 para que while nos deje pasar la primera vez


while (num >= 0){       //aca le decimos que sólo lo sume si es positivos
    num = parseInt(prompt('Ingrese números positivos (el negativo es para terminar): '));

    if(num >= 0){
        suma += num;        //a lo que tenía la variable "suma", agregale el nuevo número y guardale
    }
}
console.log(`La suma de los números ingresados es de ${suma}`);

