/*Ejercicio: Número aleatorio
Consigna: Generá un número aleatorio entre 1 y 10. 
Mostralo en consola. 
Decí si el número es mayor o menor que 5 */

let numero = Math.floor(Math.random() * 10) + 1;    //math.floor redondea al entero más cercano , para abajo

console.log("Número generado:", numero);

if (numero > 5) {
    console.log("El número es mayor que 5");
} else if (numero < 5) {
    console.log("El número es menor que 5");
} else {
    console.log("El número es igual a 5");
}


/*Math.random() devuelve un número decimal entre 0 y 1
    Si hacés:

    Math.random() * 10;

    Obtenés algo entre 0 y 9.999...

Al usar Math.floor():

    Math.floor(Math.random() * 10);

    Tenés números enteros de 0 a 9.

Si querés de 1 a 10:

    Math.floor(Math.random() * 10) + 1;
*/