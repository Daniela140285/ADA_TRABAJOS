//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. 
//Si el número no está dentro de ese rango, muestra un mensaje de error.

const prompt = require ('prompt-sync')();

let num = parseFloat(prompt("Ingrese un número del 1 al 7: "));

if (num === 1){
    console.log (" Es lunes!");
} else if (num === 2){
    console.log(" Es martes!");
} else if (num === 3){
    console.log(" Es miércoles!");
} else if (num === 4){
    console.log("Es viernes chico!");
} else if (num === 5){
    console.log("Siiii llegaste al viernes!!");
} else if (num === 6){
    console.log("Es Sábado");
} else if (num === 7){
    console.log("Dsifruta y acostaste temprano porque es domingo");
} else {
    console.log(" Error! ya quisieras pero el día Osvaldo no existe!")
}
