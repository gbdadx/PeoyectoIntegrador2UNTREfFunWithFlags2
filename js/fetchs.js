/*funciona usando el fetch contra el json o contra la api */

let enlace = 'https://restcountries.com/v3.1/all';
//let enlace = './countries.json';

  fetch(enlace)
    .then(response => response.json())
    .then(data =>{
		localStorage.setItem("objeto", JSON.stringify(data));
	})
	.catch(error => console.error('Error:', error));