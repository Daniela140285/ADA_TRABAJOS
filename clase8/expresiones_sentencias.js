//expresión que devuelve un valor
let suma = 5 + 3; //expresión

//sentencia que ejecuta una acción
if (suma > 5) {
  console.log("la suma es mayor que 5");
}

//consigna: crear un problema que simule un sistema de calificación basado en la nota de un estudiente
//(un valor numérico del 1 al 100) El programa debe determinar si el estudiente ha reprobado
// aprobado o ha obtenido una calificación excelentes segun las siguientes condiciones:
// si la nota es menor a 60, el estudiante ha reprobado
// si la nota está entre 60 y 89 inclusive, el estududiate ha aprobado
// si la nota está es mayor a 90, el estudiante ha obtenido una califiación excelente
// usa el condicional if, else if, y else para mostrar el mensaje correspondiente

let nota = 60;
if (nota < 60) {
  console.log("Reprobado");
} else if (nota >= 60 && nota <= 89) {
  console.log("Aprobado");
} else {
  //no es necesario poner la condición xq la sentencia detecta que no se cumplen las anteriores y da esta)
  console.log("Calificación excelente!");
}
