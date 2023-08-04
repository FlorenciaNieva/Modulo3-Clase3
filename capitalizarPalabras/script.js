// Consigna:
// Crear una función capitalizarPalabras tome como argumento un string string y devuelva un string donde cada palabra está capitalizada (con la primera letra ma´yuscula). Dejar las demás letras como están.
// Ejemplos:
// capitalizarPalabras('Esto es un título') // 'Esto Es Un Título'
// capitalizarPalabras('había una vez') // 'Había Una Vez'
// capitalizarPalabras('OMG') // 'OMG'

const capitalizarPalabras = (string) => {
    const palabras = string.split(' ');
    for (i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
    }
    const resultado = palabras.join(' ');
    return resultado;
}

console.log(capitalizarPalabras('Esto es un título'));
console.log(capitalizarPalabras('había una vez'));
console.log(capitalizarPalabras('OMG'));