
const productos = [
    { nombre: 'Platanos',   valor: 500 },
    { nombre: 'Pera',       valor: 500 },
    { nombre: 'Sandia',     valor: 500 },
    { nombre: 'Melon',      valor: 500 },
    { nombre: 'Fritillas',  valor: 500 },
    { nombre: 'Naranja',    valor: 500 },
    { nombre: 'apple',      valor: 500 },
    { nombre: 'apricot',    valor: 500 },
    { nombre: 'avocado',    valor: 500 },
    { nombre: 'banana',     valor: 500 },
    { nombre: 'bilberry', valor: 500 },
    { nombre: 'blackberry', valor: 500 },
    { nombre: 'blackcurrant', valor: 500 },
    { nombre: 'blood orange', valor: 500 },
    { nombre: 'blueberry', valor: 500 },
    { nombre: 'boysenberry', valor: 500 },
    { nombre: 'breadfruit', valor: 500 },
    { nombre: 'canary melon', valor: 500 },
    { nombre:'lime', valor: 500 },
    { nombre:'loquat', valor: 500 },
    { nombre:'lychee', valor: 500 },
    { nombre:'mandarine', valor: 500 },
    { nombre:'mango', valor: 500 },
    { nombre:'mulberry', valor: 500 },
    { nombre:'nectarine', valor: 500 },
    { nombre:'nut', valor: 500 },
    { nombre:'olive', valor: 500 },
    { nombre:'orange', valor: 500 },
    { nombre:'pamelo', valor: 500 },
    { nombre:'papaya', valor: 500 },
    { nombre:'passionfruit', valor: 500 },
    { nombre:'peach', valor: 500 },
    { nombre:'pear', valor: 500 },
    { nombre:'persimmon', valor: 500 },
    { nombre:'physalis', valor: 500 },
    { nombre:'pineapple', valor: 500 },
    { nombre:'plum', valor: 500 },
    { nombre:'pomegranate', valor: 500 },


];


const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    /* console.log(formulario.value); */
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML +=
                `<li href="#" class="list-group-item list-group-item-action list-group-item-info">${producto.nombre} - Valor: ${producto.valor}</li>`;
        }
    }
    if (resultado.innerHTML === '') {
        resultado.innerHTML += `<li href="#" class="list-group-item list-group-item-action list-group-item-danger">Producto no encontrado...</li>`;
    }
}

boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);
filtrar();