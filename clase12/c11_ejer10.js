/*Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego,
pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera
de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no
acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver
este ejercicio.
*/

const prompt = require("prompt-sync")();

let secreto = Math.floor(Math.random() * 10) + 1;

/*Math.random() genera un número decimal entre 0 y 1.
* 10 lo lleva a un rango entre 0 y 9,999…
Math.floor() quita los decimales.
+ 1 hace que el número final esté entre 1 y 10.
*/

for (let i = 1; i <= 3; i++){
    let num = parseInt(prompt("Adivine el número (1 a 10): "));
    
    if (num === secreto){
        console.log("¡Felicitaciones! Adivinaste el número ");
        break;
    }
    if (i === 3){
        console.log("No acertaste");
        console.log(`El número secreto era: ${secreto}`);
    }
}