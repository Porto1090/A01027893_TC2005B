//Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]

let letras = ['A', 'B', 'A', 'C', 'B'];

let letrasUnicas = [...new Set(letras)];
console.log(letrasUnicas);

let letrasDuplicadas = letras.filter((elemento, index) => {
    return letras.indexOf(elemento) !== index;
});
console.log(letrasDuplicadas);

let letrasUnicasBucle = [];
letras.forEach((elemento) => {
    if (!letrasUnicasBucle.includes(elemento)) {
        letrasUnicasBucle.push(elemento);
    }
});
console.log(letrasUnicasBucle);

