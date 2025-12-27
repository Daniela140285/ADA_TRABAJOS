const prompt = require ('prompt-sync')();

//1. Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignarás los valores numéricos. 18 y 99 respectivamente. 
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

//2. Pide al usuario que ingrese su edad. 
//3. Usa “parseInt” para convertir la entrada del usuario a un número entero. 
let edad = parseInt(prompt("Ingrese su edad: "));

//4. Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA ){
    console.log("Su edad está dentro del rango permitido! :)")
} else{
    console.log("Game over :( ")
}