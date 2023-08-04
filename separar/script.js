// Consigna:
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. 
// Ejemplo:
// separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'

const separar = (perrosYGatos) => {
    const perros = [];
    const gatos = [];
    for (let emoji of perrosYGatos) {
        if (emoji === '🐶') {
            perros.push('🐶');
        } else if (emoji === '🐱') {
            gatos.push('🐱');
        }
    }
    return perros.concat(gatos).join('');
}

console.log(separar('🐶🐱🐶🐱🐱🐶🐶'));