document.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector(".carrusel-lista");
  const items = document.querySelectorAll(".carrusel-item");
  const btnAnterior = document.querySelector(".carrusel-btn.anterior");
  const btnDespues = document.querySelector(".carrusel-btn.despues");

  let index = 0;
  let intervalo = setInterval(mostrarSiguiente, 5000); // cada 5s

  function actualizarCarrusel() {
    lista.style.transform = `translateX(-${index * 100}%)`;
  }

  function mostrarAnterior() {
    index = (index - 1 + items.length) % items.length;
    actualizarCarrusel();
    resetearIntervalo();
  }

  function mostrarSiguiente() {
    index = (index + 1) % items.length;
    actualizarCarrusel();
    resetearIntervalo();
  }

  function resetearIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(mostrarSiguiente, 5000);
  }

  btnAnterior.addEventListener("click", mostrarAnterior);
  btnDespues.addEventListener("click", mostrarSiguiente);
});
