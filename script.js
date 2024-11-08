/*document.getElementById('btnAgregar').addEventListener('click', agregarCita);

//function agregarCita() {
    const CitaInput = document.getElementById('nuevaCita');
    const CitaTexto = CitaInput.value.trim();

    if (CitaTexto === '') {
        alert('Por favor, Haga La Reserva.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = CitaTexto;

    // Botón para eliminar tarea
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
        li.remove();
    });

    // Botón para marcar como completada
    const btnCompletar = document.createElement('button');
    btnCompletar.textContent = 'Completar';
    btnCompletar.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    li.appendChild(btnCompletar);
    li.appendChild(btnEliminar);
    document.getElementById('listaTareas').appendChild(li);
    CitaInput.value = ''; // Limpiar el campo de entrada
}







document.getElementById('btnAgregar').addEventListener('click', agregarCita);

function agregarCita() {
    const citaInput = document.getElementById('nuevaCita');
    const horaCita = document.getElementById('horaCita');
    const citaTexto = citaInput.value.trim();
    const horaTexto = horaCita.value;

    if (citaTexto === '' || horaTexto === '') {
        alert('Por favor, complete la cita y seleccione una hora.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${citaTexto} - ${horaTexto}`;

    // Botón para eliminar cita
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
        li.remove();
    });

    // Botón para marcar como completada
    const btnCompletar = document.createElement('button');
    btnCompletar.textContent = 'Completar';
    btnCompletar.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    li.appendChild(btnCompletar);
    li.appendChild(btnEliminar);
    document.getElementById('listaCitas').appendChild(li);
    citaInput.value = ''; // Limpiar el campo de entrada
    horaCita.selectedIndex = 0; // Reiniciar el selector de hora
}

*/
document.getElementById('btnAgregar').addEventListener('click', agregarCita);

function agregarCita() {
    const citaInput = document.getElementById('nuevaCita');
    const barberoSelect = document.getElementById('barbero');
    const horaCita = document.getElementById('horaCita');
    
    const citaTexto = citaInput.value.trim();
    const barberoTexto = barberoSelect.value;
    const horaTexto = horaCita.value;

    // Validar que todos los campos estén completos
    if (citaTexto === '' || barberoTexto === '' || horaTexto === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${citaTexto} - ${barberoTexto} - ${horaTexto}`;

    // Marcar la cita como llena
    li.classList.add('full');

    // Botón para marcar como completada
    const btnCompletar = document.createElement('button');
    btnCompletar.textContent = 'Completar';
    btnCompletar.addEventListener('click', () => {
        li.classList.toggle('completed'); // Alternar clase 'completed'
        li.classList.remove('full'); // Remover clase 'full'
    });

    // Botón para eliminar cita
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
        li.remove(); // Eliminar el elemento de la lista
    });

    li.appendChild(btnCompletar); // Agregar el botón de completar al elemento
    li.appendChild(btnEliminar); // Agregar el botón de eliminar al elemento
    document.getElementById('listaCitas').appendChild(li); // Agregar el elemento a la lista

    // Limpiar los campos de entrada
    citaInput.value = '';
    barberoSelect.selectedIndex = 0; // Reiniciar el selector de barbero
    horaCita.selectedIndex = 0; // Reiniciar el selector de hora
}

const btnAgregar = document.getElementById('btnAgregar');
const listaCitas = document.getElementById('listaCitas');

btnAgregar.addEventListener('click', () => {
    const nombreCliente = document.getElementById('nuevaCita').value;
    const barbero = document.getElementById('barbero').value;
    const horaCita = document.getElementById('horaCita').value;

    if (nombreCliente && barbero && horaCita) {
        const li = document.createElement('li');
        li.textContent = `${nombreCliente} - ${barbero} - ${horaCita}`;
        
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => {
            listaCitas.removeChild(li);
        };

        const btnActualizar = document.createElement('button');
        btnActualizar.textContent = 'Actualizar';
        btnActualizar.onclick = () => {
            document.getElementById('nuevaCita').value = nombreCliente;
            document.getElementById('barbero').value = barbero;
            document.getElementById('horaCita').value = horaCita;
            listaCitas.removeChild(li);
        };

        li.appendChild(btnEliminar);
        li.appendChild(btnActualizar);
        listaCitas.appendChild(li);

        // Limpiar campos
        document.getElementById('nuevaCita').value = '';
        document.getElementById('barbero').value = '';
        document.getElementById('horaCita').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
