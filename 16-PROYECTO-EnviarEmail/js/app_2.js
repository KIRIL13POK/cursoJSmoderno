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
        console.log(evt.target.parentElement);


        const tipoCampo = evt.target.id
        if (evt.target.value.trim() === '') {
            mostrarAlerta(`El campo ${tipoCampo.toUpperCase()} es obligatorio`, evt.target.parentElement);
        } else {
            console.log('hay algo');
        }

    }

    function mostrarAlerta(mensaje, referencia) {
        //Compruenba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');//1- le estamos diciendo que únicamente en los elementos de este div busque essta clase
        if(alerta){
            alerta.remove();
        }//2-no me genera múltiples alertas-->entonces lo elimine



        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //Inyectar el error al formulario
        referencia.appendChild(error);


    }



});

