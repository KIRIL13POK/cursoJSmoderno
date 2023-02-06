//VARIABLES
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//Contenedor para los resultados
const resultado = document.querySelector('#resultado');



const max = new Date().getFullYear();
const min = max - 10;

//Generar  un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',

}
/*
Ya estamos filtrando tanto por marca como por año, pero no cambia nada nuestro HTML. Una vez que tengamos un resultado tenemos que volver a llamar el HTML.
*/

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    //Muestra los automobiles al cargar
    mostrarAutos(autos);// Paso3  cuando se hace llamar a esa función de mostrar datos, ahora haty que pasar como el argumento-->autos
    //Llena las opciones del año
    llenarSelect();

});

//Event listener para select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto()
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
});



function mostrarAutos(autos) {//Paso2-esta función tendrá que tomar un valor(parametro)--> auto
    //Elemina HTML previo
    limpiarHTML();//Paso5

    autos.forEach(auto => {//*Aquí estamos haciendo referencia al arreglo principal y lo estamos recorriendo.Interesa volverlo a llamar, pero ahora con un resultado.

        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
        ${marca}-${modelo}-${year}-${puertas}Puertas-${transmision}-${precio}$-${color}

        `;
        // insertar en elHTML
        resultado.appendChild(autoHTML);

    });

}

//Genera años de select
function llenarSelect() {

    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//*No va a borrar el contenido previo.

    }
}
//Limpiar HTML Paso4- creamos la funccion para borrar el contenido previo Y la vamos a mandar llamar antes de recorrer e imprimir el HTML.
function limpiarHTML() {
    //*Vamos a limpiar el resulatdo

    while (resultado.firstChild)/*mientras haya algo*/{
        resultado.removeChild(resultado.firstChild);
    }

}

//Filtar en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
    //console.log(resultado);
    mostrarAutos(resultado);// Paso1-LLamamos la funcion pasando el resultado de estos filtros como argumento

}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;

    if (marca) {
        return auto.marca === marca;
    }
    return auto;

}
function filtrarYear(auto) {
    const { year } = datosBusqueda;

    if (year) {
        return auto.year === +year;
    }
    return auto;

}  