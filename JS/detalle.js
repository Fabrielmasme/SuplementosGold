// detalle.js

// 1. Leer el ID de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// 2. Buscar el producto en el array
const producto = productos.find(prod => prod.id === id);

// 3. Mostrar el producto
const contenedor = document.getElementById("detalle-producto");

if (producto) {
  contenedor.innerHTML = `
    <h1>${producto.nombre}</h1>
    <img src="${producto.imagen}" alt="${producto.nombre}" ">
    <p><strong>Precio:</strong> $${producto.precio}</p>
    <p><strong>Descripción:</strong> ${producto.descripcion || "Sin descripción disponible."}</p>
    <a href="../HTML/productos.html">← Volver a productos</a>
  `;
} else {
  contenedor.innerHTML = `<p>Producto no encontrado.</p>`;
}
