const listaDeParticipantes = [];

function agregarAmigo() {
    let entrada = document.getElementById('amigo');
    const nombre = entrada.value.trim();

    if (!nombre) {
        swal('PORFAVOR, INGRESE UN NOMBRE!');
        return;
    }

    listaDeParticipantes.push(nombre);
    entrada.value = '';
    mostrarParticipantes();
}

function mostrarParticipantes() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar contenido anterior

    const lista = document.createElement('ol'); // Crear un elemento de lista no ordenada
    for (let i = 0; i < listaDeParticipantes.length; i++) {
        const item = document.createElement('li'); // Crear un elemento de lista
        item.textContent = listaDeParticipantes[i]; // Asignar el nombre al <li>
        lista.appendChild(item); // Agregar el <li> a la lista
    }

    resultado.appendChild(lista); // Agregar la lista completa al div resultado
}

function sortearAmigo() {
    if (listaDeParticipantes.length === 0) {
        document.getElementById('resultado').innerHTML = 'No hay participantes en el sorteo, debe ingresar un nombre.';
        return;
    }

    const indiceDeGanador = Math.floor(Math.random() * listaDeParticipantes.length);
    const ganador = listaDeParticipantes[indiceDeGanador];
    document.getElementById('listaAmigos').innerHTML = `<strong>EL GANADOR DEL SORTEO ES: ${ganador}</strong><br>`;

        const lista2 = document.createElement('ol'); // Crear un elemento de lista no ordenada
        for (let i = 0; i < listaDeParticipantes.length; i++) {
            const item = document.createElement('li'); // Crear un elemento de lista
            item.textContent = listaDeParticipantes[i]; // Asignar el nombre al <li>
            document.getElementById('listaAmigos');
            lista2.appendChild(item); // Agregar el <li> a la lista
        }
        
        // resultado.appendChild(lista2); // Agregar la lista completa al div resultado

    }
//CAMBIE EL ALERT POR EL SWAL Y SWAL.FIRE
function vaciar() {
    Swal.fire({
      title: '¿ESTÁS SEGURO?',
      text: 'ESTÁ ACCIÓN ES IRREVERSIBLE!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById('resultado').innerHTML = ''; // Limpiar el contenido visual
        document.getElementById('listaAmigos').innerHTML = '';
        listaDeParticipantes.length = 0; // Vaciar el arreglo  
        Swal.fire(
          '¡Vaciado!',
          'La lista de participantes ha sido borrada.',
          'success'
        )
      }
    })
    
  }



// function vaciar() {
//     listaDeParticipantes.length = 0; // Vaciar el arreglo
//     document.getElementById('resultado').innerHTML = ''; // Limpiar el contenido visual
//     document.getElementById('listaAmigos').innerHTML = '';
//     alert('La lista de participantes ha sido borrada.');
// }
