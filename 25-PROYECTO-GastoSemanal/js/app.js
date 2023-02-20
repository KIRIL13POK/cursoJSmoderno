//Variables Y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//Eventos

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto)
}

//Clases
class Presupuesto{
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

}

class UI{
    insertarPresupuesto(cantidad){
        //Extraendo el valor
        const { presupuesto, restante } = cantidad;
        //Agregando al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
        
    }

}

// Instanciar 
const ui = new UI();


let presupuesto;

//Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Cual es tu presupuesto?');
    // console.log(presupuestoUsuario);
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) ||presupuestoUsuario <=0 ){
        window.location.reload();//hace recargar la ventana actual
    }

    //Presuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
   
}
