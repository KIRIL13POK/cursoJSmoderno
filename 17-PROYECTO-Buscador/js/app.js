//VARIABLES
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max- 10;

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    //Muestra los automobiles al cargar
    mostrarAutos();
    //Llena las opciones del año
    llenarSelect();

});

function mostrarAutos() {
    autos.forEach(auto => {

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
function llenarSelect(){
   
    for (let i = max ; i >= min ; i--){
        const opcion = document.createElement('option');
         opcion.value = i;
         opcion.textContent = i;
         year.appendChild(opcion);

    }
}