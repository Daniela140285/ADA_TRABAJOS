let gastos = [
    [1135, 2500, 900, 1600, 2800, 650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

console.log('consultar gastos por semana')

// pedimos al usuario el número de la semana pero restamos "-1" porque en programación se cuenta desde 0
let semanaConsultada = parseInt(prompt('elegí el numero de la semana para ver los gastos')) - 1;
let totalSemana = 0; 

// ya sabemos en qué fila estamos(semanaConsultada), ahora hay que recorrer sus 7 columnas(días)
//USAMOS "J" PARA MOVERNOS DE IZQUIERA A DERECHA
for (let j = 0; j < 7; j++) {
    totalSemana += gastos[semanaConsultada][j]; //sumamos lo que hay en la fila fija y la columna variable
}
console.log (`el total de gastos de la semana ${semanaConsultada +1} es de $ ${totalSemana}`);

// total de un día (sumar una columna)
console.log("consultar gastos por día");
let diaConsultado = parseInt(prompt('elige número de día para ver los gastos (1-7): '))- 1;

let totalDía = 0;

// recorrido vertical: acá queremos dejar fija la colmuna y bajar por las semanas
for (let i = 0; i < 4; i++){
    totalDía += gastos[i][diaConsultado];
}
console.log (`El total de gastos deñ día ${diaConsultado} es de $ ${totalDía}`);

// el ejercicio continua , ver clase 13 min 2 horas.