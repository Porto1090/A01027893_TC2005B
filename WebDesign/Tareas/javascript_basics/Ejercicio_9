//Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.

function longitudCadenaMasCorta(listaCadenas) {
    if (listaCadenas.length === 0) {
        return 0;
    }

    let longitudMasCorta = listaCadenas[0].length;
    for (let i = 1; i < listaCadenas.length; i++) {
        const longitudActual = listaCadenas[i].length;
        if (longitudActual < longitudMasCorta) {
            longitudMasCorta = longitudActual;
        }
    }

    return longitudMasCorta;
}

const listaCadenas = ['Hola', 'Mundo', 'Este', 'es', 'un', 'ejemplo'];
const longitudMasCorta = longitudCadenaMasCorta(listaCadenas);
console.log(listaCadenas);
console.log('Longitud de la cadena más corta:', longitudMasCorta); // Salida esperada: 2 (la cadena 'es')

