const selectOrdenPrecio = document.getElementById("ordenPrecio");
const selectFiltrarTipo = document.getElementById("filtrarTipo");

let filtroTipo = "";
let ordenPrecio = "";

selectOrdenPrecio.addEventListener("change", (e) => {
  ordenPrecio = e.target.value;
  aplicarFiltros();
});

selectFiltrarTipo.addEventListener("change", (e) => {
  filtroTipo = e.target.value;
  aplicarFiltros();
});

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

