

// Recuperar el objeto pais almacenado en localStorage
const pais = JSON.parse(localStorage.getItem('pais'));
console.log(pais)
// Ahora puedes utilizar los datos del país en esta página para mostrar detalles
console.log(pais); // Acceder a la propiedad name.common, por ejemplo
 const h1 = document.querySelector('h1');
 h1.innerHTML=pais.name.common;
const mapa=document.querySelector('.lead');
mapa.innerHTML=` <img src="${pais.coatOfArms.png ?? pais.coatOfArms.svg }" alt="coat Of Arms" class="imagenDetalle1">`;


const btnDreturn= document.querySelector('#btnDreturn');

btnDreturn.addEventListener('click',(e)=>{
    e.stopPropagation();
    localStorage.removeItem('pais');
    window.location.href='./index.html';
});