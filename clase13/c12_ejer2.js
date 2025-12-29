/*Ejercicio 2: Do While 
Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la 
correcta. La contraseña correcta es "1234". 
*/

const prompt = require('prompt-sync')();

let contrasenia = 0;

do{                                                       //HACER: pedir contraseña 
    contrasenia = prompt('ingresar una contraseña de 4 cifras: ');              
    
} while ( contrasenia !== "1234");                       // MIENTRAS contraseña sea distino a 1234, repetir el ciclo 
console.log("Contraseña correcta");       

// OTRA FORMA-------------
do{
    contrasenia = prompt("ingresar una contraseña de 4 cifras: ");
    if(contrasenia !== "1234"){
       console.log("contraseña incorrecta"); 
    }    
} while (contrasenia !== "1234");
console.log("contraseña correcta");