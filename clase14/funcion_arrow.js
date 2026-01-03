//Ejemplo 1: funcion normal
// REcibe un parámetro num y devuelve el valor de ese número multimplicado x 2
function multiplicadoPorDos(num) {
    return num * 2;
}
//llamada de la funcion
console.log(multiplicadoPorDos(5)); //10



//ejemplo 2: funcion arrow

const multiplicadoPorDos = (num)=> {
    return num * 2;
}
console.log(multiplicadoPorDos(5)); //10



//elemplo3: funcion arrow mas simple (sin llaves y return implicito)si la fx tiene una sola expresion
const multiplicadoPorDos = (num) => num *2;

console.log(multiplicadoPorDos(5)); //10 