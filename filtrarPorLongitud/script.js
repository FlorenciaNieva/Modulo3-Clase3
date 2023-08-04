// Consigna:
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. 
// Ejemplo:
// filtrarPorLongitudMayorA(4, ['dia','azul','sorpresa','te','verde']) 
// Solución: ['remolacha', 'sorpresa', 'verde']

const filtrarPorLongitud = (longitud, palabras) => {
    const palabrasFiltradas = [];
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > longitud) {
            palabrasFiltradas.push(palabras[i]);
        }
    }
    return palabrasFiltradas;
}
console.log(filtrarPorLongitud(4, ['dia', 'remolacha', 'azul', 'sorpresa', 'te', 'verde']));