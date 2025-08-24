const contenedor = document.getElementById("contenedor-productos");

//Posible cambio de diseño
function renderizarProductos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto-card");

    div.innerHTML = `
      <a href="../HTML/producto.html?id=${producto.id}">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
      </a>
    `;

    contenedor.appendChild(div);
  });
}

// Mostrar todos los productos al inicio
renderizarProductos(productos);
