

// Recuperar el objeto pais almacenado en localStorage
const pais = JSON.parse(localStorage.getItem('pais'));
console.log(pais)
// Ahora puedes utilizar los datos del país en esta página para mostrar detalles
console.log(pais); // Acceder a la propiedad name.common, por ejemplo
 const h1 = document.querySelector('h1');
 h1.innerHTML=pais.name.common;

const mapa=document.querySelector('.lead');
let imagen= pais.coatOfArms.png ?? pais.coatOfArms.svg ?? '../img/bazinga.png' ;
mapa.innerHTML=` <img src="${imagen}" alt="coat Of Arms" class="imagenDetalle1">`;
console.log(pais.name.common)

const btnDreturn= document.querySelector('#btnDreturn');

btnDreturn.addEventListener('click',(e)=>{
    e.stopPropagation();
    localStorage.removeItem('pais');
    window.location.href='./index.html';
});