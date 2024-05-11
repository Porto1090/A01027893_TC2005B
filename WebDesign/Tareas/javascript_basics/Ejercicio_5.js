//Escribe una función que calcule el máximo común divisor de dos números.

function calcularMCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1 = 36;
const num2 = 24;
const mcd = calcularMCD(num1, num2);
console.log(`El MCD de ${num1} y ${num2} es: ${mcd}`);
