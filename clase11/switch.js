//ejemplo : determinar qué día de la semana es según un número

//1. Importar la librería
const prompt = require ('prompt-sync')();

// 2. Entrada de datos
// Pedimos el número. Usamos paseInt porque el switch comara valores excatos.
let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7: "));

//3.Estructura switch
// El switch evalúa la variable que se pone entre paréntesis(numeroDia).
//luego, busca abajo el "caso" que coincida con el valor (el valor de numeroDia)

switch(numeroDia){
    //si numeroDia es igual a 1...
    case 1:
        console.log("Es lunes, a trabajar!");
        break;
    case 2:
        console.log("Es martes");
        break;    
    case 3:
        console.log("Es miércoles");
        break;
    case 4:
        console.log("Es jueves");
        break;
    case 5:
        console.log("Es viernes");
        break;
    case 6:
        console.log("Es sábado");
        break;
    case 7:
        console.log("Es domingo");
        break;
    default:
        console.log("pusiste cualquier número");
        break;    
}