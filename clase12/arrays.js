//Arrays
let colores = ['rosa', 'naranja', 'rojo', 'azul'];
let frutas =["kiwi", "manzana", "melón"];
let numeros =[11, 23, 5, 40];
let booleanos = [true, false, true];
let mezclados = [colores, 11, "Marian", false];

//mostrar un array completo

console.log(frutas);//no va entre comillas porque llamo a la variable que está más arriba, no es un string.

// acceder a un dato específico dentro del array

console.log(colores[2]);// rojo

//arrays dentro de arrays

console.log(mezclados[0][2]);//rojo