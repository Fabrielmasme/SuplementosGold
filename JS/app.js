const contenedor = document.getElementById("contenedor-productos");

productos.forEach(producto => {
  const div = document.createElement("div");
  div.classList.add("producto");

  const precioFormateado = producto.precio > 0 ? `$${producto.precio.toLocaleString()}` : "Consultar";

  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p class="precio">${precioFormateado}</p>
  `;

  contenedor.appendChild(div);
});
