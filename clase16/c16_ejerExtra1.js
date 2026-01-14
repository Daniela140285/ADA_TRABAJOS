/*Encuentra los nombres más cortos y transforma su formato 
Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']. 
Queremos realizar varias tareas con esta lista: 
o Primero, filtra los nombres que tengan menos de 5 letras. 
o Luego, transforma los nombres resultantes para que estén en mayúsculas. 
o Finalmente, construye una frase que diga: "Los nombres seleccionados son: 
[nombres]", donde [nombres] sea la lista resultante unida por comas. 
Al final, imprime la frase en la consola.*/

let listaNombres = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

let cincoLetras = listaNombres.filter(function(nombre){
    return nombre.length < 5;    
});

let nombreMayuscula = cincoLetras.map(function(mayusculas){
    return mayusculas.toUpperCase();
});
 let frase = "Los nombres seleccionados son: " + nombreMayuscula.join (", ");
   
 console.log(frase);