document.addEventListener('DOMContentLoaded', function () {


    const inputEmail = document.querySelector('#email'),
        inputAsunto = document.querySelector('#asunto'),
        textAreaMensaje = document.querySelector('#mensaje'),
        formulario = document.querySelector('#formulario');

    //Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    textAreaMensaje.addEventListener('blur', validar);

    function validar(evt) {
        console.log(evt.target.parentElement);//2-referencia al elemento padre.--> el div que contiene ese input y que es su elemento padre.
        /*
        console.log(evt.target.parentElement.nextElementSibling);//ir al siguiente elemento-->con estas funciones puedes ir recorriendo todo tu DOM y acceder a un elemento en específico.
        */


        const tipoCampo = evt.target.id
        if (evt.target.value.trim() === '') {
            mostrarAlerta(`El campo ${tipoCampo.toUpperCase()} es obligatorio`, evt.target.parentElement);//3-Entonces aquí estamos pasando la referencia del div que contiene tanto el label como el input.
        } else {
            console.log('hay algo');
        }

    }

    function mostrarAlerta(mensaje, referencia) {// 1-tomar un segundo parámetro, que sería el elemento en el cual se va a añadir esta alerta.
        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');// para agregarle clases 

        //Inyectar el error al formulario
        referencia.appendChild(error);//4- en lugar de que sea formulario va a ser esa referencia.


    }



});

