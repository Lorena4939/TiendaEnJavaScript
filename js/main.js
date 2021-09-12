document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos() { //Creando funcion obtenerDatos 
    //Protocolo http =>url
    const url = 'http://localhost:1337/productos';

    fetch(url) //cliente para consumir API
        .then(respuesta => respuesta.json()) //promesa
        .then(resultado => imprimirDatosHTML(resultado));
}

function imprimirDatosHTML(productos) { //Creando funcion imprimirDatosHTML 
    const contenido = document.querySelector('#contenedor-productos');
    console.log(productos);
    let html = '';
    html = '';
    productos.forEach(producto => {
        const { url, titulo, autor, prologo, categoria, genero, precio } = producto;
        html +=
            `   
            <div class="flex-contenedor">
                <div class="card">
                    <img class="url-img" src="img/${url}">
                    <h2 class="titulo">${titulo}</h2>
                    <p class="autor">${autor}</p>
                    <p class="prologo">${prologo}...</p>
                    <p class="categoria">${categoria}</p>
                    <p class="genero">${genero}</p>
                    <p class="precio">$${precio}</p>
                    <p><button>Comprar</button></p>
                </div>
            </div>
           `;
    })
    contenido.innerHTML = html;
}