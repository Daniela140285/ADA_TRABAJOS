/*Ejercicio 2: Do While 
Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la 
correcta. La contraseña correcta es "1234". 
*/

const prompt = require('prompt-sync')();

let contrasenia;    //no hace falta porque el do while nos asegura que le vamos a dar un valor antes de comparar

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


//OTRA FORMA (la de clase)
// 1. Lbreria del const

//2. REgla de oro: CONSTANTE: definimos la contraseña con const y mayúscula xq siempre va a ser la misma
const CONTRASENIA_CORRECTA = "1234";

//3. Variable vacía: aca se va a guadar lo que escriba el usuario, no hace falta ponerle valor xq es do while
let constraseniaUsuario;  
 
//4. estructura do... while( hacer... mientras): primero HACE, luego PREGUNTA
do {
    //ACCION (primero pregunta), esto se da al menos una vez
    constraseniaUsuario = prompt('Ingresa contraseña');

    // 5. FEEDBACK (AVISO DE ERROR)si lo que escribió es distinto a la clave correcta, le avisamos.
    if (constraseniaUsuario !== CONTRASENIA_CORRECTA){
        console.log('contraseña incorrecta, prueba de nuevo')
    }
// 6. LA CONDICCIÓN: acá preg ¿la contraseña es distinta a la correcta?
// si es distinta (TRUE) vuelve arriba al "do"
// si es igual (FALSE) te deja pasar y sigue el código
} while (constraseniaUsuario !== CONTRASENIA_CORRECTA);

//7. si llegamos aca es xq se rompió el bucle, se puso la contraseña correcta
console.log('contraseña correcta');