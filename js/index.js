/**
 * leer el localstorage: objeto
 */

const data = JSON.parse(localStorage.getItem('objeto'));

// Verificar si se pudo obtener el objeto del localStorage
if (!data) {
  console.log('No se pudo obtener el objeto del localStorage');
} else {
  const objeto = data;

  // Función para agregar tarjetas al contenedor
  function agregarTarjetas(paises) {
    const contenedor = document.querySelector('.contenedor');

    paises.sort((a, b) => {
      const nombreA = a.name.common.toLowerCase();
      const nombreB = b.name.common.toLowerCase();
      return nombreA.localeCompare(nombreB);
    });

    contenedor.innerHTML = ''; 

    paises.forEach((pais, index) => {
      const nombreComun = pais.name.common || '';
      const nombreOficial = pais.name.official || '';
      const continente = pais.continents ? pais.continents.join(', ') : '';
      const alt = pais.flags.alt || '';
      const bandera = pais.flags.png || pais.flags.svg || '';

      const tarjeta = `<div class="card" style="width: 18rem;" >
        <img src="${bandera}" class="card-img-top" alt="${alt}">
        <div class="card-body">
          <h5 class="card-title">${nombreComun}</h5>
          <p class="card-text">${nombreOficial}</p>
          <p class="card-text">Continente: ${continente}</p>
          <a href="#" class="btn btn-primary btnCard" data-index="${index}">Detail</a>
        </div>
      </div>`;

      contenedor.innerHTML += tarjeta;
    });

    eventoBtnTarjetas(paises);
  }

  // Función para agregar eventos a los botones en las tarjetas
  function eventoBtnTarjetas(paises) {
    const btnTarjetas = document.querySelectorAll('.btnCard');
    btnTarjetas.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        const index = btn.getAttribute('data-index');
        const indexNum = parseInt(index, 10);
        const pais = paises[indexNum];
        localStorage.setItem('pais', JSON.stringify(pais));
        window.location.href = './detalle.html';
      });
    });
  }

  // Llamar a la función para cargar las tarjetas iniciales
  agregarTarjetas(objeto);

  /**eventos botones del nav: selecciona por continente */
  const botonesNav = document.querySelectorAll('.btnCont');
  botonesNav.forEach((boton) => {
    boton.addEventListener('click', () => {
      const nombreContinente = boton.textContent;
      const paises = Object.values(objeto);
      let paiss = [];
      for (let e of paises) {
        if (e.continents.includes(nombreContinente) || e.continents.some((cont) => cont.includes(nombreContinente))) {
          paiss.push(e);
        }
      }
      agregarTarjetas(paiss);
      searchCountry.value = '';
    });
  });

  /*eventos Search */

  let temporizador;

  const searchCountry = document.querySelector('#barraSearch');

  // Tu función de búsqueda en el objeto JSON
  function buscarPais(valorinput) {
    const valor = valorinput.trim().toLowerCase();
    const paises = Object.values(objeto);
    let paiss = [];

    for (let e of paises) {
      const nombreComun = e.name.common.toLowerCase();
      const nombreOficial = e.name.official.toLowerCase();

      if (
        (nombreComun.length >= 4 && nombreComun.includes(valor)) ||
        (nombreOficial.length >= 4 && nombreOficial.includes(valor))
      ) {
        paiss.push(e);
      }
    }
    agregarTarjetas(paiss);
  };
  searchCountry.addEventListener('input', function (e) {
    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
      const valorInput = e.target.value;
      buscarPais(valorInput);
    }, 300); // 300 milisegundos 
  });




}

/** botones scroll */
const contenedor = document.getElementById('contenedor');
const contenido = document.getElementById('contenido');
const scrollArribaBtn = document.querySelector('.btnUp');
const scrollAbajoBtn = document.querySelector('.btnDown');

let scrollInterval;

// Función para hacer scroll hacia arriba
function scrollArriba() {
  event.stopPropagation(); // Evita que el evento se propague al contenedor

  scrollInterval = setInterval(() => {
    window.scrollBy(0, -1000); // Ajusta la velocidad de desplazamiento aquí
  }, 10);
}

// Función para hacer scroll hacia abajo
function scrollAbajo() {
  event.stopPropagation(); // Evita que el evento se propague al contenedor
  scrollInterval = setInterval(() => {
    window.scrollBy(0, 1000); // Ajusta la velocidad de desplazamiento aquí
  }, 10);
}

// Detener el scroll cuando se suelta el botón
function detenerScroll() {
  clearInterval(scrollInterval);
}

scrollArribaBtn.addEventListener('mousedown', scrollArriba);
scrollAbajoBtn.addEventListener('mousedown', scrollAbajo);

// Detener el scroll cuando se suelta el botón en cualquier parte de la ventana
window.addEventListener('mouseup', detenerScroll);

