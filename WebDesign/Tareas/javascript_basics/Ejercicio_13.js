//Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

function cadenaMasFrecuente(listaCadenas) {
    const counts = {};
    let maxCount = 0;
    let cadenaMasFrecuente = '';

    for (const cadena of listaCadenas) {
        counts[cadena] = (counts[cadena] || 0) + 1;
        if (counts[cadena] > maxCount) {
            maxCount = counts[cadena];
            cadenaMasFrecuente = cadena;
        }
    }

    return cadenaMasFrecuente;
}

// Ejemplo de uso de la función cadenaMasFrecuente
const listaCadenas = ['hola', 'mundo', 'hola', 'mundo', 'mundo', 'hola'];
const resultado = cadenaMasFrecuente(listaCadenas);
console.log('Cadena más frecuente:', resultado); // Salida esperada: 'hola' o 'mundo' (ambos aparecen 3 veces)

