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
        const cursoSeleccionado = e.target.parentElement.parentElement; 
        leerDatosCurso(cursoSeleccionado);  
    }; 
};
//Lee el contenido de HTML al que le dimos el click y extrae la información del curso
function leerDatosCurso(curso){
    console.log(curso);
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad:1,
    }
    console.log(infoCurso);
};