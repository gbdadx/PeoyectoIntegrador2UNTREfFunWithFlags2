
/** todos los fetch */
/*funciona usando el fetch contra el json o contra la api */

let enlace = 'https://restcountries.com/v3.1/all';
//let enlace = './countries.json';

  fetch(enlace)
    .then(response => response.json())
    .then(data =>{
		localStorage.setItem("objeto", JSON.stringify(data));
	})
	.catch(error => console.error('Error:', error));




/*
date fact 
const url = 'https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6458afb59dmsh0a0fb860cd6e9b9p19328ajsnb3d466c36e91',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};
 

fetch(url, options)
.then(response => response.json())
.then(data => {
  console.log(data);
  localStorage.setItem("datefact", JSON.stringify(data));
  // Convertir el objeto JSON en un arreglo  const algo = Object.values(data);
})
.catch(error => console.error('Error:', error));


/***** math facts 
const url2= 'https://numbersapi.p.rapidapi.com/1729/math?fragment=true&json=true';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6458afb59dmsh0a0fb860cd6e9b9p19328ajsnb3d466c36e91',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

fetch(url2, options2)
.then(response => response.json())
.then(data => {
  console.log(data);
  localStorage.setItem("mathfact", JSON.stringify(data));
})
.catch(error => console.error('Error:', error));

/** random fact 
const url3 = 'https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true';
const options3 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6458afb59dmsh0a0fb860cd6e9b9p19328ajsnb3d466c36e91',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

fetch(url3, options3)
.then(response => response.json())
.then(data => {
  console.log(data);
  localStorage.setItem("randomfact", JSON.stringify(data));
})
.catch(error => console.error('Error:', error));


/**** trivia fact 
const url4 = 'https://numbersapi.p.rapidapi.com/42/trivia?fragment=true&notfound=floor&json=true';
const options4 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6458afb59dmsh0a0fb860cd6e9b9p19328ajsnb3d466c36e91',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};


fetch(url4, options4)
.then(response => response.json())
.then(data => {
  console.log(data);
  localStorage.setItem("triviafact", JSON.stringify(data));
})
.catch(error => console.error('Error:', error));

/** year fact 
const url5 = 'https://numbersapi.p.rapidapi.com/1492/year?fragment=true&json=true';
const options5 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6458afb59dmsh0a0fb860cd6e9b9p19328ajsnb3d466c36e91',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

fetch(url5, options5)
.then(response => response.json())
.then(data => {
  console.log(data);
  localStorage.setItem("yearfact", JSON.stringify(data));})
.catch(error => console.error('Error:', error));*/



/*
/** agregar evento a boton detalle de las tarjetas */
// Función para agregar eventos a las tarjetas
/*function agregarEventoACard() {
	const tarjetas = document.getElementsByClassName('card');
	Array.from(tarjetas).forEach(tarjeta => {
		tarjeta.addEventListener('click', () => {
			let id = tarjeta.id;
			let idS = id.slice(5);//el id tiene una parte cadena y una de numero, estoy quedandome con el numero
			let newObjeto = objetos.find(objeto => objeto.id == idS);
			localStorage.setItem("objeto", JSON.stringify(newObjeto));
			window.location.href = './detail.html';
		});
	});
  }*/