// esPalindromo(palabra)
// Crear una función esPalindromo que tenga como parámetro un string palabra y devuelva true si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha que de derecha a izquierda, o false sino.

// esPalindromo('ada') // true
// esPalindromo('reconocer') // true
// esPalindromo('mama') // false
// esPalindromo('javascript') // false

const esPalindromo = (palabra) => {
    const palabrasInvertida = palabra.split('').reverse().join('');
    if (palabra === palabrasInvertida) {
        return true;
    } else {
        return false;
    }
}

console.log(esPalindromo('ada'));
console.log(esPalindromo('reconocer'));
console.log(esPalindromo('mama'));
console.log(esPalindromo('javascript'));