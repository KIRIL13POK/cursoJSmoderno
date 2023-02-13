//En JavaScript, un constructor es una función especial que se utiliza para crear objetos de una determinada clase o tipo.

//Constructores==>

function Seguro (marca,year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;

}

function UI() {}
console.log(UI)


//Un nuevo prtotype ==>
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
//Cuando se llama a un constructor con la palabra clave "new", se crea un nuevo objeto que hereda las propiedades y métodos definidos en la función constructor ==>
const ui = new UI();

document.addEventListener('DOMContentLoaded',() => {
    ui.llenarOpciones();//Llenar el select con años

})

