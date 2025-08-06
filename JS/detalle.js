// 1. Leer el ID de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// 2. Buscar el producto en el array
const producto = productos.find(prod => prod.id === id);

// 3. Mostrar el producto
const contenedor = document.getElementById("detalle-producto");

// Esta seccion es para redireccionar a WhatsApp

const numeroWpp = "5492224529603"; // Reemplazalo por el tuyo

productos.forEach(producto => {
  const mensaje = `Hola! Estoy interesado en el producto ${encodeURIComponent(producto.nombre)}`;
  producto.whatsapp = `https://wa.me/${numeroWpp}?text=${mensaje}`;
});

// Mostrar el producto en el la pagina
if (producto) {
contenedor.innerHTML = `
  <div class="producto">
    <div class="producto__imagen">
      <img src="${producto.imagen}" alt="${producto.nombre}">
    </div>
    <div class="producto__info">
      <h1>${producto.nombre}</h1>
      <p class="precio">$${producto.precio}</p>
      <p class="descripcion">${producto.descripcion || "Sin descripción disponible."}</p>
      <a href="${producto.whatsapp}" target="_blank" class="boton-wpp">
         Consultar por WhatsApp
      </a>
    </div>
  </div>
`;

} else {
  contenedor.innerHTML = `<p>Producto no encontrado.</p>`;
}
