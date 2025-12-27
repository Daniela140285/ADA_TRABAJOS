//Declara dos variables con valores iniciales
let num1 = 5;
let num2 = 0;
console.log(`Variables iniciales ${num1} y ${num2}`);

//Luego intercambiá sus valores. Muestra los valores antes y después del intercambio en la consola. 

//num1 = num1 + 1;
//num1 += 1;

//num2 = num2 - 1;
//num2 -= 1;

//num1++;

//console.log(`Valores modificados ${num1} y ${num2}`);


// Resolución de Marian:
let temporal = num1; // guardo el contenido de num1 temporalmente
num1 = num2; //ahora que num1 está respaldado, paso el contenido de num2 a num1.
num2 = temporal; // finalmente paso lo que habia "temporal" a num2.
console.log(`Valores modificados ${num1} y ${num2}`);