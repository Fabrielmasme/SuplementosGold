/*const contenedor = document.getElementById("contenedor-productos");

function renderizarProductos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto-card");

    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <a href="../HTML/producto.html?id=${producto.id}">Ver detalle</a>
    `;

    contenedor.appendChild(div);
  });
}

// Mostrar todos los productos al inicio
renderizarProductos(productos);*/

import { supabase } from "./config/supabase.js";

const contenedor = document.getElementById("contenedor-productos");

async function cargarProductos() {
  const { data: productos, error } = await supabase.from("productos").select("*");
  if (error) {
    console.error(error);
    return;
  }
  renderizarProductos(productos);
}

function renderizarProductos(lista) {
  contenedor.innerHTML = "";
  lista.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto-card");
    div.innerHTML = `
      <img src="${producto.imagen_url}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <a href="../HTML/producto.html?id=${producto.id}">Ver detalle</a>
    `;
    contenedor.appendChild(div);
  });
}

cargarProductos();
