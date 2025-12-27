//Declara dos variables booleanas condicion1 y condicion2.

const prompt = require ('prompt-sync')();

let condicion1 = prompt("ingrese el primer valor booleano ") ==='true';
let condicion2 = prompt("ingrese el segundo valor booleano ") ==='true';

// //Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el resultado de diversas
//combinaciones lógicas.



console.log("resultados lógicos");
console.log("AND (&&): " + (condicion1 && condicion2));
console.log("OR (||): " + (condicion1 || condicion2));
console.log("NOT condicion1 (!): " + (! condicion1 ));