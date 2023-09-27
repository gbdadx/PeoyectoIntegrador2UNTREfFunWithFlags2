
// Recuperar el objeto pais almacenado en localStorage
const pais = JSON.parse(localStorage.getItem('pais'));
console.log(pais)


const mapa = document.querySelector('.lead');
let imagen = pais.coatOfArms.png ?? pais.coatOfArms.svg ?? './img/bazinga.png';
mapa.innerHTML = ` <img src="${imagen}" alt="coat Of Arms" class="imagenDetalle1">`;
console.log(pais.name.common)

const btnDreturn = document.querySelector('#btnDreturn');


/**aside */
function fillingAsideDetails(pais) {
    const pa = pais.name.common;
    const small1 = pais.capital;
    const small2 = pais.startOfWeek;
    const small3 = pais.population;
    const small4 = pais.maps.googleMaps;

    const costoVidaCapital = `https://www.numbeo.com/cost-of-living/in/${small1}`;
    const small5 = costoVidaCapital;
    const wiki = `https://en.wikipedia.org/wiki/${pa}`;
    const small6 = wiki;
    console.log(`capital  ${small1}`);
const anthem= pais.cca2;
const linkanthem=`https://nationalanthems.info/${anthem}.htm`;
const small7= linkanthem;
const demonyms= pais.demonyms.eng.m;
    const sma1 = document.querySelector('.small1');
    const sma2 = document.querySelector('.small2');
    const sma3 = document.querySelector('.small3');
    const sma4 = document.querySelector('.small4');
    const sma5 = document.querySelector('.small5');
    const sma6 = document.querySelector('.small6');
    const sma7= document.querySelector('.small7');
    sma1.innerHTML = `<p><span>Capital:</span> <span>   ${small1}  </span>  </p>`;
    sma2.innerHTML = `<p><span>Start Of Week:</span> <span>   ${small2}  </span>  </p>`;
    sma3.innerHTML = `<p><span>Population:</span> <span>   ${small3}  </span>  </p>`;
    sma4.innerHTML = `<p><a href="${small4}" target="_blank">GoogleMaps</a>   </p>`;
    sma5.innerHTML = `<p> <a href=" ${small5}" target="_blank">Cost Of Living (NUMBEO)</a>    </p>`;
    sma6.innerHTML = `<p> <a href=" ${small6}" target="_blank">Wikipedia ${(pa)}</a>    </p>`;
    sma7.innerHTML = `<p> <a href=" ${small7}" target="_blank">National ${(demonyms)} Anthem</a>    </p>`;

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


/*  incorporar link de national anthems info .*/
// https://nationalanthems.info/es.htm
// const anthem= pais.cca2.htm;
