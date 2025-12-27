/*Escribe un programa que le pida al usuario un número entero positivo y muestre todos los
múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.

*/
const prompt = require("prompt-sync")();

let num = parseInt(prompt("Ingrese un número entero positivo: "));
console.log(`Los múltiplos de ${num} de 1 al 100 son ` )

for (let i =1; i <= 100; i++){    
    if (i % num === 0){
        console.log(i);
    }        
}
/* se usa el operador módulo porque matemáticamente un número es multiplo de otro si al dividirlo el resto es 0*/
