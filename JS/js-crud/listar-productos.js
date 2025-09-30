import { supabase } from "../config/supabase.js";

/*const contenedor = document.getElementById("contenedor-productos");

// Obtiene productos de la base de datos
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

// Renderiza productos en tarjetas
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
      <a href="../../HTML/producto.html?id=${producto.id}">Ver detalle</a>
    `;

    contenedor.appendChild(div);
  });
}

// Ejecuta al cargar la página
renderizarProductos();
*/


const contenedor = document.getElementById(".contenedor-productos");

// Función para renderizar productos en la vista del admin
function renderProductos(productos) {
  contenedor.innerHTML = ""; // limpio antes de mostrar

  if (productos.length === 0) {
    contenedor.innerHTML = "<p>No hay productos disponibles</p>";
    return;
  }

  productos.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("card-producto");

    card.innerHTML = `
    <div class="producto-info">
      <h3 class="producto-nombre">${p.nombre}</h3>
      <p class="producto-tipo">Tipo: ${p.tipo}</p>
      <div class="producto-img-container">
        <img src="${p.imagen_url || "../img/placeholder.png"}" alt="${p.nombre}" class="producto-img" />
      </div>
      <p class="producto-descripcion">${p.descripcion || "Sin descripción"}</p>
      <p class="producto-precio">💲 ${p.precio}</p>
      <p class="producto-stock">Stock: ${p.stock}</p>
    </div>
`;
    contenedor.appendChild(card);
  });
}

// Traer productos de Supabase
async function getProductos(tipo = "") {
  let query = supabase.from("productos").select("*");

  if (tipo) query = query.eq("tipo", tipo);

  const { data, error } = await query;

  if (error) {
    console.error("Error al obtener productos:", error.message);
    contenedor.innerHTML = "<p>Error al cargar productos</p>";
    return;
  }

  renderProductos(data);
}
// Inicial
getProductos();
