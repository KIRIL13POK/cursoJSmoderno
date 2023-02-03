//VARIABLES
const resultado = document.querySelector('#resultado');
console.log(resultado);



//Eventos
document.addEventListener('DOMContentLoaded', () => {
mostrarAutos();



});

function mostrarAutos() {
    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
        ${marca}-${modelo}-${year}-${puertas}Puertas-${transmision}-${precio}$-${color}

        `;
        // insertar en elHTML
        resultado.appendChild(autoHTML);
    })

}