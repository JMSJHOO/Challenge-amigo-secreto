const listaDeParticipantes=[];
const sorteados = [];

//Function para agregar los nombres con la tecla enter
document.addEventListener('DOMContentLoaded', () => {
    // Detectar "Enter" en el input
    document.getElementById('amigo').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita que se recargue la página
            agregarAmigo();
        }
    });
});

function sortearAmigo() {
  if (listaDeParticipantes.length === 0) {
      document.getElementById('resultado').innerHTML = 'No hay participantes en el sorteo, debe ingresar un nombre.';
      return;
  }

  const indiceDeGanador = Math.floor(Math.random() * listaDeParticipantes.length);
  const ganador = listaDeParticipantes[indiceDeGanador];
  sorteados.push(ganador);
  listaDeParticipantes.splice(indiceDeGanador, 1);
  document.getElementById('listaAmigos').innerHTML = `<strong>EL GANADOR DEL SORTEO ES: ${ganador}</strong><br>`;

    // Actualizar la lista de participantes
    mostrarParticipantes();

  // Mostrar la lista de participantes después del sorteo
  const lista2 = document.createElement('ol'); 
  for (let i = 0; i < listaDeParticipantes.length; i++) {
      const item = document.createElement('li'); 
      item.textContent = listaDeParticipantes[i]; 
      lista2.appendChild(item);  
  }

  // Asegurarte de agregarlo al div correcto
}


function mostrarParticipantes() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<h3>Lista de Participantes:</h3>`; 
  

  if (listaDeParticipantes.length === 0) {
      resultado.innerHTML += '<p>No hay participantes aún.</p>';
      return;
  }

  const lista = document.createElement('ol'); 
  listaDeParticipantes.forEach((nombre, index)=> {
      const item = document.createElement('li'); 
      item.textContent = nombre;
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'x';
      btnEliminar.style.marginLeft = '10px';
      btnEliminar.style.color= 'red';
      btnEliminar.onclick = () => eliminarParticipante(index);
      item.appendChild(btnEliminar);
      lista.appendChild(item);
  });
  resultado.appendChild(lista);
  
}

function eliminarParticipante(index) {
    listaDeParticipantes.splice(index, 1); // Elimina el participante de la lista
    mostrarParticipantes(); // Vuelve a mostrar la lista actualizada
}

function vaciar() {
  Swal.fire({
      title: '¿ESTÁS SEGURO?',
      text: '¡ESTA ACCIÓN ES IRREVERSIBLE!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'No, cancelar'
  }).then((result) => {
      if (result.isConfirmed) {
          listaDeParticipantes.length = 0; // Vaciar el arreglo
          document.getElementById('resultado').innerHTML = ''; 
          document.getElementById('listaAmigos').innerHTML = '';
          Swal.fire('¡Vaciado!', 'La lista de participantes ha sido borrada.', 'success');
      }
  });
}

function agregarAmigo() {
  let entrada = document.getElementById('amigo');
  const nombre = entrada.value.trim();

  if (!nombre) {
      swal('POR FAVOR, INGRESE UN NOMBRE!');
      return;
  }

  if (listaDeParticipantes.includes(nombre)) {
      swal('Este nombre ya ha sido agregado.');
      return;
  }

  listaDeParticipantes.push(nombre);
  entrada.value = '';
  entrada.focus();
  mostrarParticipantes();
}
