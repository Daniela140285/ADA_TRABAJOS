/*●	Ejercicio 4: Número par o impar
Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. Usa una variable local para guardar el resultado.
*/
function esPar (num){
    let resultado;
    if(num %2 === 0 ){
        resultado = "es par";
    }else{
        resultado = "es impar";
    }
   return resultado;    
};

console.log(esPar(4));