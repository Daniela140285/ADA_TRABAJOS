//vamos a crear un programa que imprima un contador regresivo.
//desde 5 horas hasta 1 hora utilizando un bucle while y do while

const prompt = require ('prompt-sync')();// no hace falta ponerla porque no la uso, está para confundir.

//WHILE----------------------

console.log('Contador regresivo usando while');

let contador = 5;
while (contador >= 1){
    console.log(contador);
    contador--;
}

//DO WHILE-------------------
console.log('Contador regresivo usando Do While');

let contador2 = 5;

do{
    console.log(contador2);
    contador2--;
} while(contador2 >= 1);

// Se puede resolver con "if ternario"