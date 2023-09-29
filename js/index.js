/*funciona usando el fetch contra el json o contra la api */

let enlace = 'https://restcountries.com/v3.1/all';
//let enlace = './countries.json';

  fetch(enlace)
    .then(response => response.json())
    .then(data =>{
		localStorage.setItem("objeto", JSON.stringify(data));
	})
	.catch(error => console.error('Error:', error));


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
          <p class="card-text">Continent: ${continente}</p>
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

  //  función de búsqueda en el objeto JSON
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

}//fin ELSE de Verificar si se pudo obtener el objeto del localStorage

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
    window.scrollBy(0, -300); // Ajusta la velocidad de desplazamiento aquí
  }, 10);
}

// Función para hacer scroll hacia abajo
function scrollAbajo() {
  event.stopPropagation(); // Evita que el evento se propague al contenedor
  scrollInterval = setInterval(() => {
    window.scrollBy(0, 300); // Ajusta la velocidad de desplazamiento aquí
  }, 10);
}

// Detener el scroll cuando se suelta el botón
function detenerScroll() {
  clearInterval(scrollInterval);
}

//incorporado para los eventos en moviles
// Manejo de eventos táctiles (touchstart) junto con eventos de ratón (mousedown)
scrollArribaBtn.addEventListener('mousedown', scrollArriba);
scrollAbajoBtn.addEventListener('mousedown', scrollAbajo);

scrollArribaBtn.addEventListener('touchstart', scrollArriba);
scrollAbajoBtn.addEventListener('touchstart', scrollAbajo);

// También se puede agregar eventos touchend para detener el scroll en dispositivos táctiles
scrollArribaBtn.addEventListener('mouseup', detenerScroll);
scrollAbajoBtn.addEventListener('mouseup', detenerScroll);

scrollArribaBtn.addEventListener('touchend', detenerScroll);
scrollAbajoBtn.addEventListener('touchend', detenerScroll);


// Detener el scroll cuando se suelta el botón en cualquier parte de la ventana
window.addEventListener('mouseup', detenerScroll);



/***  SIGN IN    SIGN UP    CONTACT MODALS */
//sign up
const registerBtn = document.querySelector(".registerBtn");

registerBtn.addEventListener("click", (e) => {
    const userData = {
        email: '',
        password: '', 
      
    };
    let errores = [];

    // 1. Obtenemos el valor ingresado en el input de email
    const emailQ = document.querySelector('#uname');
    userData.email = emailQ.value;

    // 2. Obtenemos los datos ingresados en el input de password
    const passwordQ = document.querySelector('#pwd'); 
    userData.password = passwordQ.value; 

    // 7. Si todo está correcto, mostramos por consola un objeto con la información
    // ingresada por el usuario.
    

       
        let aux = ''
        for (let key in userData) {

            datosUsuario.innerHTML += `<p>${key}: ${userData[key]}</p>`;
            aux += '*' + key + ' : ' + userData[key] + '\n';
            
        }
        console.log(aux);

        alert(aux);
    
});

