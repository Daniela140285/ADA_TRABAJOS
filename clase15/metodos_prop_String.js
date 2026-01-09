//Creamos una cdena de texto
let descripPerro = " El Pastor Aleman es un perro muy inteligete y leal. "; 
console.log("Cadena original: " , `${descripPerro}`);

//PROPIEDADES-------------------------

//1. LENGTH: devuelve la longitud de la cadena
console.log("Longuitud de la cadena con length: ", descripPerro.length); // resultado 55, contando los espacios
// si selecciono la frase, en la barra de abajo me da el resultado         

//2. INDEXOF: devuelve el primer indice donde se escuentra una sbcadena, o -1 si no está

let indicenteligente = descripPerro.indexOf("inteligente");
console.log("Indice de inteligente con indexof: ", indicenteligente) // resultado 34

//METODOS----------------------------

//3. SLICE: extrae una parte de la cadena entre dos indices.
let subcadena = descripPerro.slice(3,17);
console.log("Subcandena con slice 3,17 ", `${subcadena}`);// resultado : " Pastor Aleman es", arranca con un espacio

//4. TRIM: elimina los espacios en blanco al inicio y al final
let cadenaSinEspacios = descripPerro.trim();
console.log("Cadena limpia con trim: " , `${cadenaSinEspacios}`)// resultado:"El Pastor Aleman es un perro muy inteligete y leal."

//5. REPLACE:  reemplaza una subcadena por otra

let cadenaReemplazada = descripPerro.replace("inteligente","valiente");
console.log("Cadena reemplazada por replace: ", `${cadenaReemplazada}`);// resultado; " El Pastor Aleman es un perro muy valiente y leal. "

//6. SPLIT: divide un string en un array según un delimitador
let palabras = descripPerro.split(" ");
console.log("Cadena dividida con split: ", `${palabras}`)// resultado: ver en cosnola