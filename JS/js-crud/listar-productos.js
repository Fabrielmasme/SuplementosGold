import { supabase } from "../config/supabase.js"; // tu config de supabase

const contenedor = document.getElementById("contenedor-productos");

// 🔹 Obtener productos de la base de datos
async function obtenerProductos() {
  let { data: productos, error } = await supabase
    .from("productos") // nombre de tu tabla
    .select("id, nombre, descripcion, precio, imagen_url");

  if (error) {
    console.error("Error al traer productos:", error);
    return [];
  }

  return productos;
}

// 🔹 Renderizar productos en tarjetas
async function renderizarProductos() {
  const lista = await obtenerProductos();

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

// 🔹 Ejecutar al cargar la página
renderizarProductos();
