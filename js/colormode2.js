
/** color mode */
const body = document.body;


// Detectar la preferencia de color del navegador
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const savedColorMode = localStorage.getItem('colorMode');

/*Aplicar la preferencia del navegador al cargar la página*/
/*si no hay nada en localStorage(en colorMode) cumple la preferencia del navegador*/
if (!savedColorMode) {
    if (prefersDarkScheme.matches) {
        body.classList.add('dark-mode');

        localStorage.setItem('colorMode', 'dark');
    } else {
        body.classList.add('light-mode');

        localStorage.setItem('colorMode', 'light');
    }
}

// Comprobar la preferencia almacenada y aplicarla al cargar la página
if (savedColorMode === 'dark') {
    body.classList.add('dark-mode');

} else if (savedColorMode === 'light') {
    body.classList.add('light-mode');

}


