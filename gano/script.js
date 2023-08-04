// Consigna:
// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

// gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
// gano(['💫', '💫', '💫', '💫', '💫']) // true
// gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true

const gano = (tragamonedas) => {
    for (let i = 0; i < 5; i++) {
        if (tragamonedas[i] !== tragamonedas[0]){
            return false;
        }
    }
    return true;
};

gano(['⭐️', '⭐️', '⭐️', '💫', '✨']);
gano(['💫', '💫', '💫', '💫', '💫']);
gano(['💫', '💫', '💫', '💫', '💫', '⭐️']);