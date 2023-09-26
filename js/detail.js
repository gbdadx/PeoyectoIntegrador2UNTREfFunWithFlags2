

// Recuperar el objeto pais almacenado en localStorage
const pais = JSON.parse(localStorage.getItem('pais'));
console.log(pais)
// Ahora puedes utilizar los datos del país en esta página para mostrar detalles
console.log(pais); // Acceder a la propiedad name.common, por ejemplo


const mapa = document.querySelector('.lead');
let imagen = pais.coatOfArms.png ?? pais.coatOfArms.svg ?? './img/bazinga.png';
mapa.innerHTML = ` <img src="${imagen}" alt="coat Of Arms" class="imagenDetalle1">`;
console.log(pais.name.common)

const btnDreturn = document.querySelector('#btnDreturn');


/**aside */
function  fillingAsideDetails(pais){
    const small1=pais.capital;
    const small2=pais.startOfWeek;
   const small3=pais.population;
    const small4=pais.maps.googleMaps;
    //const small5=pais.currencies//
    const small6=pais.region
    console.log(`capital  ${small1}`);
    //console.log(`regions  ${small6}`);
    //console.log(`currencies  ${small5}`);
    //console.log(`regions  ${small6}`);
    
    const sma1=document.querySelector('.small1');
   const sma2=document.querySelector('.small2');
   const sma3=document.querySelector('.small3');
   const sma4=document.querySelector('.small4');
   // const sma5=document.querySelector('.small5');
    const sma6=document.querySelector('.small6');
    
    sma1.innerHTML= `<p><span>Capital:</span> <span>   ${small1}  </span>  </p>`;
   sma2.innerHTML= `<p><span>Start Of Week:</span> <span>   ${small2}  </span>  </p>`;
   sma3.innerHTML= `<p><span>Population:</span> <span>   ${small3}  </span>  </p>`;
    sma4.innerHTML= `<p><a href="${small4}" target="_blank">GoogleMaps</a>   </p>`;
    //sma5.innerHTML= `<p>${small5}</p>`;
    }
    fillingAsideDetails(pais)
    
const asideTitle = document.querySelector('.ListGroup');
let aux = `<h2>${pais.name.common}</h2>`;
asideTitle.innerHTML = aux;
btnDreturn.addEventListener('click', (e) => {
    e.stopPropagation();
    localStorage.removeItem('pais');
    window.location.href = './index.html';
});


/*
const small7=pais.subregion
const small8=pais.languages
const small9=pais.population
const small10=pais.latlng
const small11=pais.area
const small12=pais.startOfWeek
const small13=pais.timezones
const small14=pais.maps */

