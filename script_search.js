
const productos = [
    { nombre: 'Platanos', valor: 25 },
    { nombre: 'Pera', valor: 5 },
    { nombre: 'Sandia', valor: 30 },
    { nombre: 'Melon', valor: 50 },
    { nombre: 'Fritillas', valor: 40 },
    { nombre: 'Naranja', valor: 50 },
    { nombre: 'Manzana', valor: 51 },
    { nombre: 'Albaricoque ', valor: 20 },
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
    //  Verduras
    { nombre: 'Alcachofa', valor: 500 },
    { nombre: 'Calabaza', valor: 500 },
    { nombre: 'Brotes de alfalfa', valor: 500 },
    { nombre: 'Col', valor: 500 },
    { nombre: 'Coliflor', valor: 500 },
    { nombre: 'Perejil', valor: 500 },
    { nombre: 'Lechuga', valor: 500 },
    { nombre: 'Cilantro', valor: 500 },
    { nombre: 'Repollo', valor: 500 },
    { nombre: 'Alcaucil', valor: 500 },
    { nombre: 'Rúcula', valor: 500 },
    { nombre: 'Borraja', valor: 500 },
    { nombre: 'Brotes de soja', valor: 500 },
    { nombre: 'Acelga', valor: 500 },
    { nombre: 'Pepino', valor: 500 },
    { nombre: 'Betabel', valor: 500 },
    { nombre: 'Chaucha', valor: 500 },
    { nombre: 'Zucchini', valor: 500 },
    { nombre: 'Puerro', valor: 500 },
    { nombre: 'Espárrago', valor: 500 },
    { nombre: 'Cardos', valor: 500 },
    { nombre: 'Salvia', valor: 500 },
    { nombre: 'Repollos de Bruselas', valor: 500 },
    { nombre: 'Espinacas', valor: 500 },
    { nombre: 'Apio', valor: 500 }



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