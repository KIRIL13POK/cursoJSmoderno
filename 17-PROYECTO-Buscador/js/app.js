//VARIABLES
const resultado = document.querySelector('#resultado');
console.log(resultado);

const year = document.querySelector('#year')
console.log(year);


//agencia de automóviles no quiere vender automóviles de más de diez años.--> utilizar estos dos valores para generar las diferentes opciones 
const max = new Date().getFullYear();
const min = max- 10;
//La ventaja es que este getFullerYear cuando se presenta el cambio de año, va a tomar el año actual en el cual estés y no vas a tener que venir a cambiarlo manualmente.



//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();//muestra los automobiles al cargar


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
    })

}

//Genera años de select
function llenarSelect(){
   
    for (let i = max ; i >= min ; i--){
        const opcion = document.createElement('option');// creamos elemento
         opcion.value = i;// value es un metodo que tiene input y le asignamos  valor i
         opcion.textContent = i;//
         year.appendChild(opcion);//Agrega opcion de año

    }
}