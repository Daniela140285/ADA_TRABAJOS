/*Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays 
Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes 
propiedades: nombre, edad y un array de notas (con 5 notas).  
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las 
siguientes tareas: 
1. Agregar una nueva nota al array de notas. PUSH
2. Eliminar la primera nota del array. SHIF
3. Calcular el promedio de las notas restantes. REDUCE
4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el 
método “toUpperCase()” 
https://www.w3schools.com/jsref/jsref_touppercase.asp 
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas.*/

let estudiante ={
    nombre : "Diego",
    edad : 25,
    notas : [7, 8, 10, 6, 5],    
};
function procesarEstudiante (estudiante){
    estudiante.notas.push(3);
    estudiante.notas.shift();

    let sumaNotas = estudiante.notas.reduce(function(acumulador, nota){
        return acumulador + nota;
    },0);
    let promedio = sumaNotas / estudiante.notas.length;  //divide la suma obtenida x la cantidad de elementos (.length) que tiene el array

    let mayusculas = estudiante.nombre.toUpperCase();

    return {
        nombre : mayusculas,
        promedio : promedio,
    };
}
console.log(procesarEstudiante(estudiante));