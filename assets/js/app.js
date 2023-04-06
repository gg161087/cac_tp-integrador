const rowLanzamientos = document.getElementById('row-lanzamientos');

fetch('./database/products.json')
    .then(res => res.json())
    .then(data => {
        for (const producto of data) {        
            rowLanzamientos.innerHTML += `
                <div class="producto">
                    <img src="${producto.imagen}" alt="${producto.nombre} - ${producto.serie}">
                    <h4>${producto.serie}</h4>
                    <h3>${producto.nombre}</h3>
                    <p class="precio">${producto.precio}</p>
                    <p class="cuotas">${producto.cuotas}</p>
                </div>
            `
        }        
    })
    .catch(error => console.error(error));