
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
        
    }else{
        
    }
    
}