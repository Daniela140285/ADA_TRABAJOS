/*●	Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.
*/

let encontrarMayor = function (num1, num2){
    if (num1 > num2){
        return num1;
    } else if (num1 < num2){
        return num2;
    } else{
        return "son iguales"
    }
};
console.log(encontrarMayor(1,5));
