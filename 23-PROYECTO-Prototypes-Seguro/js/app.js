
//Constructores

function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;

}

//Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function () {
    /* La función cotiza un seguro de automóvil basándose en la marca del vehículo:
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
    */
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            break;
            cantidad = base * 1.35;
        default:
            break;
    }

    //Leer el año
    const diferencia = new Date().getFullYear()- this.year;

    //Se calcula la diferencia en años entre el año actual y el año del automóvil y se reduce el costo en un 3% por cada año.
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
    Si el seguro es basico se multiplica 30% más
    Si el seguro es completo se multiplica 50% más
    */

    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;

    }
    
    return cantidad;
    // El método cotizarSeguro se agrega al prototipo del objeto Seguro, lo que significa que cualquier instancia de Seguro tendrá acceso a este método.

}


function UI() { }

//Prtotype
//Llena las opciones de los años==>
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 23;

    const selectYear = document.querySelector('#year');
    for (let i = max; i >= min; i--) {
        let option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);

    }
}

//Muesta alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('DIV');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');

    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //Insertar HTML==>
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    // Para limpiar ese mensaje de error ==>
    setTimeout(() => {
        div.remove();
    }, 3000);

}


//Instanciar UI

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();//Llenar el select con años

})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    //Leer la marca slecionada
    const marca = document.querySelector('#marca').value;

    //Leer el año slecionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatirios', 'error')
        return;

    }

    ui.mostrarMensaje('Todo Correcto', 'correcto');

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    seguro.cotizarSeguro();




    //Ultilizar el prototype que va a cotizar

}