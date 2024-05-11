//Escribe una función que tome una lista de números y devuelva la mediana y la moda.

function calcularMedianaModa(listaNumeros) {
    const sortedList = listaNumeros.slice().sort((a, b) => a - b);
    const length = sortedList.length;
    const middle = Math.floor(length / 2);
    const mediana = length % 2 === 0 ? (sortedList[middle - 1] + sortedList[middle]) / 2 : sortedList[middle];

    const counts = {};
    for (const numero of sortedList) {
        counts[numero] = (counts[numero] || 0) + 1;
    }
    let moda = [];
    let maxCount = 0;
    for (const numero in counts) {
        const count = counts[numero];
        if (count > maxCount) {
            moda = [numero];
            maxCount = count;
        } else if (count === maxCount) {
            moda.push(numero);
        }
    }

    return { mediana, moda };
}

const listaNumeros = [1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 8, 9];
const { mediana, moda } = calcularMedianaModa(listaNumeros);
console.log(listaNumeros);
console.log('Mediana:', mediana);
console.log('Moda:', moda);

