import { supabase } from "../JS/config/supabase.js"; // ajustar ruta según carpeta

const contenedor = document.getElementById("detalle-producto");

// 🔹 Obtener parámetro ID de la URL
const params = new URLSearchParams(window.location.search);
const idProducto = params.get("id");

async function cargarDetalle() {
  if (!idProducto) {
    contenedor.innerHTML = "<p>❌ Producto no encontrado.</p>";
    return;
  }

  const { data: producto, error } = await supabase
    .from("productos")
    .select("*")
    .eq("id", idProducto)
    .single();

  if (error || !producto) {
    console.error("Error al traer producto:", error);
    contenedor.innerHTML = "<p>⚠️ No se pudo cargar el producto.</p>";
    return;
  }

  // Renderizar tarjeta de detalle
  contenedor.innerHTML = `
    <div class="detalle-card">
      <img src="${producto.imagen_url}" alt="${producto.nombre}" />
      <h2>${producto.nombre}</h2>
      <p><strong>Precio:</strong> $${producto.precio}</p>
      <p><strong>Stock:</strong> ${producto.stock} unidades</p>
      <p><strong>Descripción:</strong> ${producto.descripcion}</p>
      <p><strong>Tipo:</strong> ${producto.tipo}</p>
    </div>
  `;
}

cargarDetalle();
