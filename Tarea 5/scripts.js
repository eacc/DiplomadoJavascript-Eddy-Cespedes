//Variables
const boton = document.getElementById('boton');
const ancho2 = document.getElementById('ancho2');
const alto2 = document.getElementById('alto2');

const evento = () => {
    const ancho = document.getElementById('ancho');
    const alto = document.getElementById('alto');
    const caja = document.getElementById('caja');
    caja.style.width = ancho.value+'px';
    caja.style.height = alto.value+'px';
}

boton.addEventListener('click', evento);

const ancho = () => {
    const ancho = document.getElementById('ancho2');
    const caja = document.getElementById('caja');
    caja.style.width = ancho2.value+'px';
}

ancho2.addEventListener('input', ancho);

const alto = () => {
    const alto = document.getElementById('alto2');
    const caja = document.getElementById('caja');
    caja.style.height = alto.value+'px';
}

alto2.addEventListener('input',alto);