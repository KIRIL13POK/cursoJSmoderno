
//Constructores==>

function Seguro (marca,year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;

}

function UI() {}
console.log(UI)

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

//Instaciar UI

const ui = new UI();

document.addEventListener('DOMContentLoaded',() => {
    ui.llenarOpciones();//Llenar el select con años

})

eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',cotizarSeguro);//-->Cuando se envía el formulario, se ejecutará la función cotizarSeguro
}

function cotizarSeguro(e){
    e.preventDefault();//--> es un método que detiene el comportamiento por defecto de un evento. Por ejemplo, si un formulario se envía con un evento de submit, el navegador normalmente recargará la página y enviará los datos del formulario al servidor. Si se llama a preventDefault en el controlador de eventos del submit, se evitará la acción por defecto y los datos del formulario no se enviarán.

    //Leer la marca slecionada
    const marca = document.querySelector('#marca').value;

    //Leer el año slecionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

   //Este es un bloque if que verifica si alguna de las variables marca, year o tipo está vacía -->
    if(marca === '' || year === '' || tipo === ''){
        console.log('No paso la validacion');
    }else{
        console.log('Exelente, todo correcto');
    }
    
}