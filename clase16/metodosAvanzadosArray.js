//Metodos Array Avanzados

//.map(): para crear un nuevo array con los resultados de la fx apliacada a cada elemento
let notas = [10, 4, 5, 8, 9, 2, 7];

let notasHastaCien = notas.map(function(numero){
    return numero * 10;
});

console.log(notasHastaCien);


//.filter(): crea un nuevo array con elementos que pasan la condición especificada en una fx de tipo filtro

let notasAprobadas = notas.filter(function(numero){
    return numero >= 4 ;
});

console.log(notasAprobadas);// todo menos el 2


//.reduce(): reduce a un valor único un array

let sumaNotas = notas.reduce(function(acumulador, numero){
    return acumulador + numero;
});

console.log(sumaNotas); // 45


//.forEach(): iterar sobre un array pero no retorna nada

notas.forEach(function(valor, indice){
    console.log(`en la posicion: ${indice} tengo el valor: ${valor}`)
});

//.find(): encuentra el primer elemento en el array que cumple con la condicion.

let notaEncontrada = notas.find(function(numero){
    return numero >= 8;
});
console.log(notaEncontrada); //10 , el 9 no xq encuentra primero el 10