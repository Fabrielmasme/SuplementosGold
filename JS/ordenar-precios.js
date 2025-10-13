import { supabase } from "../JS/config/supabase.js";

const contenedor = document.getElementById("contenedor-productos");
const selectOrdenPrecio = document.getElementById("ordenPrecio");
const selectFiltrarTipo = document.getElementById("filtrarTipo");

let productos = [];     // almacenará todos los productos de Supabase
let filtroTipo = "";
let ordenPrecio = "";

// 🔹 Renderiza los productos en la pantalla
function renderizarProductos(lista) {
  contenedor.innerHTML = "";

  if (!lista || lista.length === 0) {
    contenedor.innerHTML = "<p>No hay productos disponibles</p>";
    return;
  }

  lista.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto-card");

    div.innerHTML = `
      <a href="../HTML/producto.html?id=${producto.id}" class="producto-link">
        <img src="${producto.imagen_url || "../img/placeholder.png"}" alt="${producto.nombre}" class="producto-img" />
        <div class="producto-detalles">
          <h3 class="producto-nombre">${producto.nombre}</h3>
          <p class="producto-descripcion">${producto.descripcion || "Sin descripción disponible"}</p>
          <p class="producto-precio">$${producto.precio}</p>
        </div>
      </a>
    `;

    contenedor.appendChild(div);
  });
}


// 🔹 Obtiene los productos desde Supabase
async function getProductos() {
  const { data, error } = await supabase.from("productos").select("*");

  if (error) {
    console.error("Error al obtener productos:", error.message);
    contenedor.innerHTML = "<p>Error al cargar productos</p>";
    return;
  }

  productos = data; // guardo todos los productos en memoria
  aplicarFiltros(); // renderizo aplicando los filtros actuales
}

// 🔹 Aplica los filtros seleccionados
function aplicarFiltros() {
  let resultado = [...productos];

  // FILTRO POR TIPO
  if (filtroTipo !== "") {
    resultado = resultado.filter(p => p.tipo === filtroTipo);
  }

  // ORDEN POR PRECIO
  if (ordenPrecio === "menor") {
    resultado.sort((a, b) => a.precio - b.precio);
  } else if (ordenPrecio === "mayor") {
    resultado.sort((a, b) => b.precio - a.precio);
  }

  renderizarProductos(resultado);
}

// 🔹 Eventos de los filtros
selectOrdenPrecio.addEventListener("change", (e) => {
  ordenPrecio = e.target.value;
  aplicarFiltros();
});

selectFiltrarTipo.addEventListener("change", (e) => {
  filtroTipo = e.target.value;
  aplicarFiltros();
});

// 🔹 Inicialización
getProductos();
