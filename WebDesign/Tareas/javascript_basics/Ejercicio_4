//Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.

function capitalizarPrimerasLetras(cadena) {
    let palabras = cadena.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] !== "") {
            palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substring(1);
        }
    }

    let nuevaCadena = palabras.join(" ");
    
    return nuevaCadena;
}

let cadenaOriginal = "hola mundo";
let cadenaCapitalizada = capitalizarPrimerasLetras(cadenaOriginal);
console.log(`Cadena capitalizada: ${cadenaCapitalizada}`);
