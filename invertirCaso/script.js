// Consigna:
// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.
// Ejemplos:
// invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
// invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
// invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'

const invertirCaso = (string) => {
    let stringInvertido = '';
    for (const caracter of string) {
        if (caracter === caracter.toUpperCase()) {
            stringInvertido += caracter.toLowerCase();
        } else {
            stringInvertido += caracter.toUpperCase();
        }
    }
    return stringInvertido;
}

console.log(invertirCaso('Ada Lovelace'));
console.log(invertirCaso('feliz cumple'));
console.log(invertirCaso('jAvAsCrIpT'));