//Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.

function esPotenciaDeDos(numero) {
    return (numero & (numero - 1)) === 0 && numero !== 0;
}

let numeroUno= 16;
let numeroDos= 12;
console.log(`${numeroUno}: ${esPotenciaDeDos(numeroUno)}`);
console.log(`${numeroDos}: ${esPotenciaDeDos(numeroDos)}`);

