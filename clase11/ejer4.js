//1.Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
let verdadero = true; 
//2. Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras). 
let texto = "Hermosa mañana, verdad?!";
//3. Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal). 
let numero = 14;
//4. Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.
let nada = null;

//Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección. 
 let suma = numero + 123 ;
 console.log(suma);

//2. Concatena el “string” de la variable texto con otro mensaje adicional.
console.log(`${texto} venite a tomar unos mates!!`);

//3. Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado. 
let verificar = (verdadero === true) ? 'Es true' : 'Es false';
console.log(verdadero);

//4. Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así. 
if (nada === null){
    console.log("La variable representa ausencia de valor");
} else {
    console.log("El ejercicio está mal realizado");
}