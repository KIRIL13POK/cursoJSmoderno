document.addEventListener('DOMContentLoaded', function(){
    
    
    const inputEmail = document.querySelector('#email'),
          inputAsunto = document.querySelector('#asunto'),
          textAreaMensaje = document.querySelector('#mensaje'),
          formulario = document.querySelector('#formulario');

    //Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    textAreaMensaje.addEventListener('blur',validar);

    // -->Pero para hacer nuestro código más reutilizable, podemos reemplazar un callback por una función. //Tenemos una sola función que se va a encargar de ello en lugar de tener código repetitivo
    
    function validar(evt){
        const tipoCampo = evt.target.id
        //console.log(evt.target.id)//para  encontrar información sobre el elemento que dispara ese evento.
        if(evt.target.value.trim() === ''){
            mostrarAlerta(`El campo ${tipoCampo.toUpperCase ()} es obligatorio`);// de esa forma se va a inyectar dinámicamente el ID de cada uno de los campos   
        }else{
            console.log('hay algo');
        }
        
    }
   
    function mostrarAlerta(mensaje){
       // Generar alerta en HTML
       const error = document.createElement('P');
       error.textContent = mensaje
       error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');// para agregarle clases 

       //Inyectar el error al formulario
       formulario.appendChild(error);//Agregar un nuevo elemento a lo ya existente.
      
       
    }



});

