// alerta inicial
Swal.fire({
    title:"¡¡¡Bienvenidos a nuestro codigo enigma!!!",
    text:"En esta pagina  aprenderas algunas recomendaciones para proteger usuarios ",
	timer:"11000",
    timerProgressBar:true,
    confirmButtonColor:'rgb(0, 81, 255)',
    imageUrl:"https://media.kasperskydaily.com/wp-content/uploads/sites/87/2013/06/05214549/042.gif",
    imageWidth:"500px",
    
    });
// contador de palabras contador_palabras !Evento input!
document.getElementById("textarea_msj").addEventListener("input",()=>{
    var textarea=document.getElementById("textarea_msj");
    var contador=document.getElementById("contador_palabras");
    contador.innerHTML=textarea.value.length;

})
// button para cifrar
//
document.getElementById("btn-cifrar").addEventListener("click",function(){
    var input = parseInt(document.getElementById("msj").value);
    var mensaje = document.getElementById("textarea_msj").value;
    var codigosNew = [];
    var nuevoMsj="";

    if( input > 0 & input <= 28){
        for(let i=0;i<mensaje.length;i++){
        var c =mensaje[i].toLowerCase();
        var codMsj = c.charCodeAt();
        var codNew = 32;
        if(codMsj != 32 ){
            codNew = codMsj + input;
        }
        if( codNew > 122){
            var d = codNew-122;
            codNew = 96 + d
                }

        nuevoMsj += String.fromCharCode(codNew);
        var msj =document.getElementById(msj);
         
    Swal.fire({
        title:"¡¡¡El codigo Cifrado  es!!!",
        timer:"22000",
        html:'<h3><span id="new_msj"></span></h3>',
        imageUrl:"https://i.gifer.com/bz.gif",
        timerProgressBar:true,
        imageWidth:"500px",
        confirmButtonColor:'rgb(0, 81, 255)',
        });}
    document.getElementById("new_msj").innerHTML = nuevoMsj
    } else{
        Swal.fire({
            title:"¡¡¡HUBO UN FALLO !!!",
            text:"Recuerda que si quieres el codigo cifrado antes debes colocar la clave secreta y no debe ser mayor a 24",
            timerProgressBar:true,
            confirmButtonColor:'rgb(0, 81, 255)',
            imageUrl:"https://i.giphy.com/media/hj9drAwoje3xS/giphy.gif",
            imageWidth:"500px",
            
            });}
    
    
})
// button para decifrar
document.getElementById("btn-decifrar").addEventListener("click",function(){
    var mensaje = document.getElementById("textarea_msj").value;
    var input = parseInt(document.getElementById("msj").value);

    var codigosNew = [];
    var nuevoMsj="";
    if( input > 0 & input <= 28){
    for(let i=0;i<mensaje.length;i++){
        var c =mensaje[i].toLowerCase();
        var codMsj = c.charCodeAt();
        var codNew = codMsj + 0;

        nuevoMsj += String.fromCharCode(codNew);
    }
    Swal.fire({
        title:"¡¡¡El codigo secreto es!!!",
        timer:"22000",
        html:'<h3><span id="new_msj"></span></h3>',
        timerProgressBar:true,
        confirmButtonColor:'rgb(0, 81, 255)',
        imageUrl:"https://i.gifer.com/bz.gif",
        imageWidth:"250px",
        
        });

    document.getElementById("new_msj").innerHTML = nuevoMsj

    }else{
        Swal.fire({
            title:"¡¡¡HUBO UN FALLO!!!",
            text:"Recuerda que si quieres el codigo cifrado antes debes colocar la clave secreta que no debe ser mayor a 24 (⊙_⊙;)",
            timerProgressBar:true,
            confirmButtonColor:'rgb(0, 81, 255)',
            imageUrl:"https://i.giphy.com/media/hj9drAwoje3xS/giphy.gif",
            imageWidth:"500px",
             })} })
