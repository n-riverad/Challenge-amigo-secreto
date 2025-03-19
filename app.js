// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 * Toma el valor del input, lo añade al arreglo de amigos y actualiza la lista visual
 */
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, escribe un nombre válido');
        return;
    }

    amigos.push(nombre);
    input.value = ''; // Limpia el input
    actualizarLista();
}

/**
 * Función para actualizar la lista de amigos
 * Recorre el arreglo y crea elementos <li> para mostrarlos
 */
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista actual

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

/**
 * Función para sortear el amigo secreto
 * Al presionar el botón se selecciona aleatoriamente un amigo
 * de la lista
 */
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpia resultados anteriores

    if (amigos.length === 0) {
        alert('La lista está vacía. Agrega al menos un amigo para sortear.');
        return;
    }

    // Seleccionar aleatoriamente un amigo secreto
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    // Mostrar el resultado en la lista de resultados
    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}
