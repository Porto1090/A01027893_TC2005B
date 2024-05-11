//Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.

function ordenAlfabetico(listaCadenas) {
    return listaCadenas.slice().sort();
}

const listaOriginal = ['perro', 'gato', 'elefante', 'leon', 'tigre'];
const listaOrdenada = ordenAlfabetico(listaOriginal);
console.log(listaOrdenada);

