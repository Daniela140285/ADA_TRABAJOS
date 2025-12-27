//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. 
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno.

const prompt = require ('prompt-sync')();

let long1 = parseFloat(prompt ("Ingrese longitud 1: "));
let long2 = parseFloat(prompt ("Ingrese longitud 2: "));
let long3 = parseFloat(prompt ("Ingrese longitud 3: "));

if (long1 === long2 && long1 === long3){
    console.log ("Es un triángulo equilátero");
} else if (long1 === long2 && long1 != long3 || long1 === long3 && long1 != long2 || long2 === long3 && long2 != long1){
    console.log ("Es un triángulo isóseles");
} else{
    console.log ("Es un triángulo escaleno");
}