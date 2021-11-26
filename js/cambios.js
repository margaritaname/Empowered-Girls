//Evento de click en el boton con el id 'btn-cambia'
document.getElementById("btn-cambiar").addEventListener("click", function(){
    //variablepara guardar el valor del input
    var mensaje = document.getElementById("msj").value;
    //Arreglo vacio par las nuevas letras
    var letrasNuevas = [];
    //Opcion A: fuera del bucle
    var nuevoMensaje = "";
    //Bucle para recorres las letrasde la palabra
    for(i=0;i<mensaje.length ;i++){
   //Convertir caracter en minuscula
     var c = mensaje[i].toLowerCase();
    //Vriable para guardar el numero de la posiscion de la letra del mensaje
    var codMsj = mensaje[i].charCodeAt();
    //Variable para obtener el nuevo codigo de mi nueva letra
    var codNuevo = codMsj + 2;
    //Condicional para reiniciar el contador desde "a" , si se pasa de "z" 
    if(codNuevo > 122){
        var d = codNuevo - 122;
        codNuevo = 96 + d;
    }
   //Concatenar las nuevas letras en un solo string, la variable nuevoMensaje
    nuevoMensaje += String.fromCharCode(codNuevo)
    }
    //Colocar mensaje final en la etiqueta span
    document.getElementById("new_msj").innerHTML = nuevoMensaje;   
})

document.getElementById("msj").addEventListener("input", function(){
    var input = document.getElementById("msj");
    var p = document.getElementById("new_msj");
    p.innerHTML = input.value.length;
})