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

        const tipoCampo = evt.target.id
        if (evt.target.value.trim() === '') {
            mostrarAlerta(`El campo ${tipoCampo.toUpperCase()} es obligatorio`, evt.target.parentElement);
            return;//--> lo que hace es detener la ejecución del código.
        }


        limpiarAlerta(evt.target.parentElement);//-->1.1-Tenemos que pasarle la referencia para que sepa qué alerta es la que tiene que eliminar.


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
    //lo que estamos haciendo aquí es tener una función aparte, dividir un poco nuestro código
    function limpiarAlerta(referencia) {//-->1Tenemos que pasarle la referencia para que sepa qué alerta es la que tiene que eliminar
        //comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {//-->2-tenemos que comprobar que exista una alerta.
            alerta.remove();//-->3- y va a limpiar esa alerta en lugar de limpiar otras alertas.
        }
    }





});

