/*●	Ejercicio 10: Factorial de un número (Ejercicio entrevista)
Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
Fórmula del factorial:
*/

let calcularFactorial = function(num){
    let resultado = 1;                  //Se inicializa la variable resultado en 1, factorial nunca empieza en 0.
    for (let i = 1; i <= num; i++){     //El bucle se repite mientras i sea menor o igual a num
        resultado = resultado *i;       //En cada iteración: se multiplica el valor actual de resultado por i. El resultado se va acumulando
    }
    return resultado
} 
console.log(calcularFactorial(4)); 