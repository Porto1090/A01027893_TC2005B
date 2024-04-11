//Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

function toHackerSpeak(text) {
    const hackerMap = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5'
    };

    text = text.toLowerCase();

    const hackerText = text.split('').map(char => {
        return hackerMap[char] || char;
    }).join('');

    return hackerText;
}

const textoOriginal = 'Javascript es divertido';
const hackerSpeak = toHackerSpeak(textoOriginal);
console.log(`Hacker Speak: ${hackerSpeak}`);

