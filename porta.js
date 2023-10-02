function mostrarIntereses() {
    const listaIntereses = document.querySelector('.lista-intereses');


    const interesesAdicionales = ['Viajar', 'Aprender programación', 'Hacer deporte'];

    for (const interes of interesesAdicionales) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = interes;
        listaIntereses.appendChild(nuevoElemento);
    }

  
    const boton = document.querySelector('.boton');
    boton.style.display = 'none';
}


function mostrarComidasFavoritas() {
    const comidasFavoritas = document.querySelector('.comidas-favoritas');

   
    comidasFavoritas.style.display = 'block';
    comidasFavoritas.classList.add('slideIn'); 
}


const botonMostrarComidas = document.getElementById('mostrarComidas');
botonMostrarComidas.addEventListener('click', mostrarComidasFavoritas);