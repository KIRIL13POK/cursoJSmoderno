//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];



//Eventos
eventEventListeners();

function eventEventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}



//Funciones
function agregarTweet(e){
    e.preventDefault();

    console.log('Agregando tweet');
}
