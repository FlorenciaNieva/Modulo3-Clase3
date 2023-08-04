// Consigna:
// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.
// Ejemplos:
// crearCuentaRegresiva(3) // [3, 2, 1, 0]
// crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]

const crearCuentaRegresiva = (numeroInicial) => {
    const cuentaRegresiva = [];
    for (i = numeroInicial; i >= 0; i--) {
        cuentaRegresiva.push(i);
    }
    return cuentaRegresiva;
}

console.log(crearCuentaRegresiva(3));
console.log(crearCuentaRegresiva(5));