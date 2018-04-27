//document.body.style.backgroundImage = "url('imagen/FondoIni.jpg')";
var nameUser = prompt("Ingrese su nombre");
var palabra2 = document.getElementById('palabra2');
var palabra3 = document.getElementById('palabra3');
var nameTitle = document.getElementById('user');



palabra2.textContent = "Bienvenida(o):";    
nameTitle.textContent = nameUser;
palabra3.textContent= "Trivia Cultural";
setTimeout(function(){

    var question = prompt("¿Te animas a  enfrentar  este reto?");
    var question2= question.toLowerCase();
      if (question2=="no") {

           alert("¡Ojala te animes para la proxima!");
          }
    
/************************************Si aceptaste la prueba,la realizaras***************************/    
    if(question2 === "si"){
 
////////////////////////////////////////////// PREGUNTA 1  ////////////////////////////////////////////////////
     var answer = prompt("Pregunta 1: \n ¿Quien dijo: Un pequeño paso para el hombre,es un gran salto para la humanidad?");
      var answer2 = answer.toLowerCase();
        
        if(answer2 =="niels armstrong"){
            var probandoAnswer1 = "Respuesta Correcta" ;
            
    }else {
            var probandoAnswer1 = "Respuesta Incorrecta" ;
}
 ///////////////////////////////////////////// PREGUNTA 2 /////////////////////////////////////////////////////       
       var answer3 = prompt("Pregunta 2 : \n ¿Cual es el lago mas grande del mundo?");
       var answer4 = answer3.toLowerCase();
       if(answer4 =="mar caspio"){
             var probandoAnswer2 = "Respuesta Correcta" ;
            
    }else {
             var probandoAnswer2 = "Respuesta Incorrecta" ;
    }
///////////////////////////////////////////// PREGUNTA 3 ////////////////////////////////////////////////////////
    var answer3 = prompt("Pregunta 3 :\n ¿Quien descubrio America?");
    var answer4 = answer3.toLowerCase();

    if(answer4 =="cristobal colon"){
        var probandoAnswer3 = "Respuesta Correcta" ;
            
    }else {

             var probandoAnswer3 = "Respuesta Incorrecta" ;
    }

//////////////////////////////////////////// IMPRIMO LOS RESULTADOS ////////////////////////////////////////////////////          

          document.getElementById('resultado').innerHTML=" Los resultados de su participacion en la Trivia Cultural , " + nameUser + "." ;

          if(probandoAnswer1=="Respuesta Correcta"){
          document.getElementById('var1').innerHTML = '1.- ¡¡Felicitaciones!!     Respuesta Correcta.  '  ;
            }else {
                document.getElementById('var1').innerHTML = '1.-Respuesta Incorrecta. <br>Respuesta: Niels Armstrong menciona esa frase al pisar la Luna .';
            }
          

          if(probandoAnswer2=="Respuesta Correcta"){
          document.getElementById('var2').innerHTML = '2.-¡¡Felicitaciones!!     Respuesta Correcta. ';
            }else {
                document.getElementById('var2').innerHTML = '2.-Respuesta Incorrecta.<br> Respuesta: Mar Caspio es el Lago mas grande del mundo. <br> El segundo es el Lago Superior. ';
            }
          

          if(probandoAnswer3=="Respuesta Correcta"){
          document.getElementById('var3').innerHTML = '3.-¡¡Felicitaciones!!       Respuesta Correcta.  ';
            }else {
                document.getElementById('var3').innerHTML = '3.-Respuesta Incorrecta. <br> Cristobal Colon fue el que decubrio America en el año 1492.';
            }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     }  //Fin de si(de haber aceptado el si de la trivia)
     
   }

, 1000);

