// Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

const list = document.getElementById('list');
const title = document.getElementById('title');

const crearPlaylist = () => {
    const nombrePlaylist = prompt("Ingrese el nombre de la playlist:");
    let cantidadCanciones = parseInt(prompt("Ingrese la cantidad de canciones que desea agregar:"));
    const playlist = [];
    for (let i = 1; i <= cantidadCanciones; i++) {
        const cancion = prompt(`Ingrese el nombre de la canción ${i}:`);
        playlist.push(cancion);
        alert(`Canciones restantes por agregar: ${cantidadCanciones - i}`);
        alert(`Playlist actual: ${playlist.join(', ')}`);
    }
    title.innerHTML = `Playlist + ${nombrePlaylist} + creada con las siguientes canciones:`;
    list.innerText = playlist.join('\n');
}

crearPlaylist();