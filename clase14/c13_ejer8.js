/*●	Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
*/
let convertirCelsiusAFahrenheit = function(temperaturaCelsius){
    return (temperaturaCelsius * 9 / 5) + 32;
}
console.log(convertirCelsiusAFahrenheit(20));