// Variables
const carrito = document.querySelector('#carrito');
// console.log(carrito);
const listaCursos = document.querySelector('#lista-cursos');
// console.log(listaCursos);
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
// console.log(contenedorCarrito);
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
// console.log(vaciarCarritoBtn);


cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
};

//Funciones
// Función que añade el curso al carrito
function agregarCurso(e){
    e.preventDefault();//prevenimos la acción por default
    if(e.target.classList.contains('agregar-carrito')){
        console.log('Agregando al carrito.....')
    }; 
};