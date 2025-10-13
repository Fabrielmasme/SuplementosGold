import { supabase } from "../JS/config/supabase.js";

const contenedor = document.getElementById("detalle-producto");

// 🔹 Obtener el parámetro id de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
  contenedor.innerHTML = "<p>Producto no encontrado.</p>";
} else {
  obtenerProducto(id);
}

// 🔹 Consultar producto específico
async function obtenerProducto(id) {
  const { data, error } = await supabase.from("productos").select("*").eq("id", id).single();

  if (error || !data) {
    contenedor.innerHTML = "<p>Error al cargar el producto.</p>";
    console.error(error);
    return;
  }

  const p = data;
  contenedor.innerHTML = `
    <div class="detalle-card">
      <img src="${p.imagen_url || "../img/placeholder.png"}" alt="${p.nombre}" class="detalle-img" />
      <div class="detalle-info">
        <h1>${p.nombre}</h1>
        <p class="detalle-tipo">Tipo: ${p.tipo}</p>
        <p class="detalle-descripcion">${p.descripcion || "Sin descripción disponible."}</p>
        <p class="detalle-precio">💲 ${p.precio}</p>
      </div>
    </div>
  `;
}
