document.addEventListener('DOMContentLoaded', function(){
    
    
    const inputEmail = document.querySelector('#email'),
          inputAsunto = document.querySelector('#asunto'),
          textAreaMensaje = document.querySelector('#mensaje');
   

    //Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    textAreaMensaje.addEventListener('blur',validar);

    // -->Pero para hacer nuestro código más reutilizable, podemos reemplazar un callback por una función. //Tenemos una sola función que se va a encargar de ello en lugar de tener código repetitivo
    
    function validar(evt){
        console.log(evt.target.value);
        if(evt.target.value.trim() === ''){
            mostrarAlerta();   
        }else{
            console.log('hay algo');
        }
        
    }
   
    function mostrarAlerta(){
       // Generar alerta en HTML
       const error = document.createElement('P');
       error.textContent = 'Hubo un error...'
      console.log(error);
    
       
    }



});

