
//Constructores==>

function Seguro (marca,year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;

}

function UI() {}

//Prtotype
//Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 23;

    const selectYear = document.querySelector('#year') ;
    for( let i = max; i >= min; i--){
        let option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);

    }
}

//Muesta alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('DIV');

    if(tipo === 'error'){
        div.classList.add('error');  
    }else{
        div.classList.add('correcto');  

    }

    div.classList.add('mensaje','mt-10'); 
    div.textContent = mensaje;

    //Insertar HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));//-->insertBefore() es un método de JavaScript que se utiliza para insertar un nodo como hijo de otro nodo en el árbol de nodos del Document Object Model (DOM). Este método toma dos argumentos: el nodo a ser insertado (el "nodo nuevo") y el nodo referencia (el "nodo hermano"). El nodo nuevo se insertará antes del nodo hermano en el árbol de nodos del DOM.

    // Para limpiar ese mensaje de error ==>
    setTimeout( () => {
        div.remove();
    },3000);

}


//Instaciar UI

const ui = new UI();

document.addEventListener('DOMContentLoaded',() => {
    ui.llenarOpciones();//Llenar el select con años
    
})

eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //Leer la marca slecionada
    const marca = document.querySelector('#marca').value;

    //Leer el año slecionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatirios','error')
        return; 
        // Si alguno de estos campos está vacío, se muestra un mensaje de error utilizando el método mostrarMensaje de la clase "ui". El mensaje se pasa como argumento a mostrarMensaje y su segundo argumento es una cadena "error" que indica que se trata de un mensaje de error.
    }
    
    ui.mostrarMensaje('Todo Correcto','correcto');
    // Si todos los campos están llenos, se muestra un mensaje de éxito con el método mostrarMensaje de la clase "ui". El mensaje se pasa como argumento y su segundo argumento es una cadena "correcto" que indica que se trata de un mensaje de éxito.




    
}