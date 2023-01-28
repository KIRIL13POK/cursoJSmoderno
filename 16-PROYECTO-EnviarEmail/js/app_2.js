document.addEventListener('DOMContentLoaded', function () {
    //Este objeto va a contener cada uno de estos valores, es decir, email, asunto y mensaje.
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }
    


    const inputEmail = document.querySelector('#email'),
        inputAsunto = document.querySelector('#asunto'),
        textAreaMensaje = document.querySelector('#mensaje'),
        formulario = document.querySelector('#formulario');

    //Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    textAreaMensaje.addEventListener('blur', validar);

    function validar(evt) {

        const tipoCampo = evt.target.id
        if (evt.target.value.trim() === '') {
            mostrarAlerta(`El campo ${tipoCampo.toUpperCase()} es obligatorio`, evt.target.parentElement);
            return;//--> lo que hace es detener la ejecución del código.
        }

        
        if(  evt.target.id === 'email' && !validarEmail(evt.target.value)){// estas dos condiciones se tienen que cumplir.
            mostrarAlerta(`El ${tipoCampo.toUpperCase()} no es valido`, evt.target.parentElement )
            return;
        }
         
        limpiarAlerta(evt.target.parentElement);

        //Asignar los valores --> Si el código llega a ejecutarse hasta aqui, significa que hemos pasado las validaciones.
        email[evt.target.name] = evt.target.value.trim().toLowerCase();

        //Comprobar el objeto de email
        comprobarEmail()
        


    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //Inyectar el error al formulario
        referencia.appendChild(error);


    }
   
    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ //--> 1- expresión regular para emails en JavaScript 
        const resultado = regex.test(email);
        return resultado;

    }

     function comprobarEmail(){
        //console.log(Object.values(email));//--> retorna un array con valores.
        //podemos utilizar un método de arreglos --> 
        console.log(Object.values(email).includes(''));//--> verificamos si al menos uno de esos valores contiene un string vacío.Va a retornar true o false


     }
    





});

