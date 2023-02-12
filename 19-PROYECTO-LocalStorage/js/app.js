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

    const tweetObj = {
        id: Date.now(),
        tweet
    }

  //Añadir añareglo  de Tweets
  tweets = [...tweets, tweetObj];
  console.log(tweets);

  //Una vez agregado vamos a crear HTML
  crearHTML();

  //Reniciar textarea/formulario
  formulario.reset();
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

//Muesta un listado de los tweets
function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet => {
            //Crear el HTML
            const li = document.createElement('LI');

            //Añadir el texto
            li.innerText = tweet.tweet

            //Isertarlo en HTML
            listaTweets.appendChild(li);

        });

    }
}

//Limpiar el HTMl
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);

    }

}
