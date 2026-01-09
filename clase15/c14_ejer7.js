/*●	Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔	título: una cadena con el título del libro.
✔	autor: una cadena con el nombre del autor del libro.
✔	anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado.
*/

let libro1 = {
    titulo: "libro 1",
    autor: "autor 1",
    anioPublicacion: 2025, 
}
let libro2 = {
    titulo: "libro 2",
    autor: "autor 2",
    anioPublicacion: 2025, 
}
function mostrarLibro(libros){
    for (let i = 0; i < libros.length; i++) {
        console.log(`Titulos: ${libros[i].titulo}, ${libros[i].autor}, ${libros[i].anioPublicacion} `)
    }
}

let biblioteca = [libro1, libro2]; //creacion del array que contiene los 2 objetos, ahora biblioteca es una lista de objetos.

mostrarLibro(biblioteca);

// NO LO PUDE HACER, COPIO DE CLASE.