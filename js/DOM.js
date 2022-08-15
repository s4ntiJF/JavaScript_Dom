// querySelector
const titulo = document.querySelector('.header__texto h2'); // 0 o 1 Elementos
titulo.textContent = 'Nuevo titulo';
console.log(titulo);
// quesySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Servicios';
enlaces[0].classList.add('nueva__clase');
enlaces[0].classList.remove('navegacion__enlace');
console.log( enlaces );

// generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar href 
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild( nuevoEnlace );

console.log( nuevoEnlace );

// Eventos
console.log(1);
 
window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no esperea CSS o imagenes
    console.log(4);
});

console.log(5);

// window.onscroll = function(){
// console.log('Esperando....');
// }

// Seleccionar elementos y asociarles un evento
// const btnEvento = document.querySelector('.boton--primario');
// btnEvento.addEventListener('click', function(evento) {
//    console.log( evento );
//    evento.preventDefault();
    // Validar un formulario
    // console.log('Enviando formulario');
// })


// Eventos del los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El Evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; // Corta la ejecución del código
    }

    // Crear la alerta de Enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente');
});

function leerTexto(evento){
    // console.log(evento.target.value);

    datos[evento.target.id] = evento.target.value;
    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    
    // que desaparezca en 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}







