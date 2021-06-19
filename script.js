
const productos = [
    { nombre: 'Platanos', valor: 500 },
    { nombre: 'Pera', valor: 500 },
    { nombre: 'Sandia', valor: 500 },
    { nombre: 'Melon', valor: 500 },
    { nombre: 'Fritillas', valor: 500 },
    { nombre: 'Naranja', valor: 500 },
    { nombre: 'apple', valor: 500 },
    { nombre: 'Albaricoque ', valor: 500 },
    { nombre: 'Aguacate', valor: 500 },
    { nombre: 'Platano', valor: 500 },
    { nombre: 'Arandano', valor: 500 },
    { nombre: 'blackberry', valor: 500 },
    { nombre: 'Grosella', valor: 500 },
    { nombre: 'Naranja sanguina', valor: 500 },
    { nombre: 'Blueberry', valor: 500 },
    { nombre: 'Boysenberry', valor: 500 },
    { nombre: 'Fruta del pan', valor: 500 },
    { nombre: 'Melon canario', valor: 500 },
    { nombre: 'Lima', valor: 500 },
    { nombre: 'Nispero', valor: 500 },
    { nombre: 'Lychee', valor: 500 },
    { nombre: 'Mandarina', valor: 500 },
    { nombre: 'Mango', valor: 500 },
    { nombre: 'Mora', valor: 500 },
    { nombre: 'Nectarina', valor: 500 },
    { nombre: 'Nuex', valor: 500 },
    { nombre: 'Aceituna', valor: 500 },
    { nombre: 'Naranaja', valor: 500 },
    { nombre: 'Pamelo', valor: 500 },
    { nombre: 'Papaya', valor: 500 },
    { nombre: 'Maracuya', valor: 500 },
    { nombre: 'Durazno', valor: 500 },
    { nombre: 'Pera', valor: 500 },
    { nombre: 'Persimmon', valor: 500 },
    { nombre: 'Physalis', valor: 500 },
    { nombre: 'Piña', valor: 500 },
    { nombre: 'Ciruela', valor: 500 },
    { nombre: 'Granada', valor: 500 },
    { nombre: 'Pomelo', valor: 500 },
    { nombre: 'Mangostán morado', valor: 500 },
    { nombre: 'Membrillo', valor: 500 },
    { nombre: 'Pasa', valor: 500 },
    { nombre: 'Rambutan', valor: 500 },
    { nombre: 'Frambruesa', valor: 500 },
    { nombre: 'Grosella', valor: 500 },
    { nombre: 'Melon de roca', valor: 500 },
    { nombre: 'Baya de salal', valor: 500 },
    { nombre: 'Satsuma', valor: 500 },
    { nombre: 'Fruta estrella', valor: 500 },
    { nombre: 'Fresa', valor: 500 },
    { nombre: 'Tamarillo', valor: 500 },
    { nombre: 'Mandarina', valor: 500 },
    { nombre: 'Tomate', valor: 500 },
    { nombre: 'Fruta ugli', valor: 500 },
    { nombre: 'Sandia', valor: 500 },

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
        resultado.innerHTML += `<li href="#" class="notfound list-group-item list-group-item-action list-group-item-danger">Producto no encontrado...</li>`;
    }
}

boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);
filtrar();