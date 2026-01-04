/*●	Ejercicio 10: Factorial de un número (Ejercicio entrevista)
Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
Fórmula del factorial:
*/

let calcularFactorial = function(num){
    let resultado = 1;
    for (let i = num; i >= 1; i--){
        resultado = resultado *i;
    }
    return resultado
} 
console.log(calcularFactorial(5)); 