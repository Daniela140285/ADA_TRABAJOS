/*Ejercicio 7: Filtra nombres que empiecen con la letra 'A' 
Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos quedarnos solo con los 
nombres que comiencen con la letra 'A'. Por ejemplo, el nombre 'Luis' no debería estar en el 
resultado porque empieza con 'L'. */

listaNombres = ['Ana', 'Luis', 'Andrea', 'María'];

let nombresA = listaNombres.filter(function(nombre){
    return nombre [0] === 'A' ;     //nombre [0]--> accedemos a la primera letra del string (posicion 0). los string tienen posiciones. Si no pongo [0] lee el string entero.
});
console.log(nombresA);