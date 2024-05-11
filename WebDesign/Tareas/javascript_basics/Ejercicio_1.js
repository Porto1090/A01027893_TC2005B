//Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'

function primerCaracterNoRepetido(cadena) {
    let frecuencia = {};
    
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
    }
    
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        if (frecuencia[caracter] === 1) {
            return caracter;
        }
    }
    
    return null;
}

let cadena = 'abacddbec';
let answer= primerCaracterNoRepetido(cadena);
console.log(`${cadena} -> ${answer}`);
