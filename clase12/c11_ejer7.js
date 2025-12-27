//Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. 
// Según la operación ingresada, el programa deberá calcular y mostrar el resultado. 
// Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.

const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Ingrese un número: "));
let num2 = parseFloat(prompt("Ingrese un otro número: "));
let operacion = prompt("Ingrese una operación matemática como suma, resta, multiplicación o división: ").toLowerCase();
let resultado;

switch(operacion){
    case "suma":
        resultado = num1 + num2;
        console.log(`Resultado :${num1} + ${num2} = ${resultado}`);
        break;
    case "resta":
        resultado= num1 - num2;
        console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
        break;
    case "multiplicacion":
        resultado= num1 * num2;
        console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
        break;
    case "division":
        if (num2 !== 0){
            resultado= num1 / num2;
            console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
        } else {
            console.log("Ojo! no se puede dividir por 0" );
        }
        break;
        
    default:
        console.log("Operación no válida, intenta con: +, -, *, /");

}