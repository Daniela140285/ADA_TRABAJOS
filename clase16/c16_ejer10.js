/*Ejercicio 10: Construye una frase a partir de una lista de palabras 
Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], queremos construir una frase completa 
concatenando cada palabra en orden, separadas por espacios. Al final, deberíamos obtener 
el texto 'Me gusta aprender JavaScript'. */
let listaPalabras = ['Me', 'gusta', 'aprender', 'JavaScript'];

let frase = listaPalabras.reduce(function(acumulador, palabra){
    return acumulador + ` ${palabra}`;
});
console.log(frase);

// la profe dice que se puede resolver con .join:

 let frase2 = listaPalabras.join(' ');

 console.log(frase2);