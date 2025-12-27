//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. 
//Muestra un mensaje personalizado según el caso. 

const prompt = require ('prompt-sync')();

let edad = parseFloat(prompt ("Ingrese su edad: "));

if (edad >= "18"){
    console.log("Eres mayor de edad, puedes ingresar!");
} else{
    console.log("Eres menor de edad, busca a tu mamá")
}