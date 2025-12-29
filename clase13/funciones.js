//--------------FUNCION NORMAL---para tareas específicas o cálculos.

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}
console.log(`Área del rectángulo (base=10, altura=5): ${calcularAreaRectangulo(10, 5)} `);

//10 y 5 son los argumentos y, base y altura: los parámetros.



//----------------------------FUNCIÓN DECLARADA--- se destaca xq se eleva (hoisting) al inicio del archivo
//Podes llamarla antes de su declaración en el código

function esPar (num) {
    if (num % 2 === 0){
        return "Es par";
    } else{
        return "Es impar";
    }    
}
console.log(`El número 7: ${esPar(7)}`);
console.log(`El número 8 : ${esPar(8)}`);



//--- FUNCION EXPRESADA--- funcion anónima que se asigna a una variable. No se puede llamar ante de su definición xq no está sujeta al hoisting
const encontrarMayor = function (a, b){
    if (a > b){
        return a;
    } else {
        return b;
    }
}
console.log(`El mayor entre 15 y 25 es: ${encontrarMayor(15, 25)}`); //ACA LLAMO A LA FX.
