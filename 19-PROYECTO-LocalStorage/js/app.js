//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];



/*<--\\----------****EVENTOS*****-----------//-> */

eventEventListeners();

function eventEventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}

/*<--\\----------****FUNCIONES*****-----------//-> */

//Agregar Tweet -->
function agregarTweet(e){
    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if(tweet ===''){
        mostrarError('El mensaje NO puede ir vacio');
        return;
    }

    console.log('agregando tweet');
    console.log(tweet);
}

//Mostrar mensaje de error -->
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3 segundos-->
    setTimeout(() => {
        mensajeError.remove();

    }, 3000);

}
