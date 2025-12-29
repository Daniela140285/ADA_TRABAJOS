// Variable con SCOPE LOCAL-----

 let mensajeGlobal = "Estoy en scope globlal";

 function mostrarMansaje(){
    let mensajeLocal = "Estoy en scope local";

    console.log(mensajeGlobal);
    console.log(mensajeLocal);
 }

 mostrarMansaje(); //llama a la fx y muestra ambos mensajes

 console.log(mensajeLocal);//error porque es variable local