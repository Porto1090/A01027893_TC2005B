//Escribe una función que revise si una cadena de texto es un palíndromo o no.

function esPalindromo(cadena) {
    const cadenaSinEspacios = cadena.toLowerCase().replace(/\s/g, '');
    const cadenaInvertida = cadenaSinEspacios.split('').reverse().join('');
    return cadenaSinEspacios === cadenaInvertida;
}

const texto = 'Anita lava la tina';
console.log(esPalindromo(texto));

