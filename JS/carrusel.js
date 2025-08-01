  document.addEventListener("DOMContentLoaded", () => {
    const carruselLista = document.querySelector(".carrusel-lista");
    const carruselItems = document.querySelectorAll(".carrusel-item");
    const btnAnterior = document.querySelector(".anterior");
    const btnSiguiente = document.querySelector(".despues");

    let index = 0;
    const totalItems = carruselItems.length;

    // Desplazar al item correspondiente
    const scrollToIndex = (i) => {
      carruselItems[i].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    };

    // Botón siguiente
    btnSiguiente.addEventListener("click", () => {
      index = (index + 1) % totalItems;
      scrollToIndex(index);
    });

    // Botón anterior
    btnAnterior.addEventListener("click", () => {
      index = (index - 1 + totalItems) % totalItems;
      scrollToIndex(index);
    });

    // Auto-slide
    const autoSlide = setInterval(() => {
      index = (index + 1) % totalItems;
      scrollToIndex(index);
    }, 5000); // cada 5 segundos

    // (Opcional) Detener auto-slide si el usuario toca o pasa el mouse
    carruselLista.addEventListener("touchstart", () => clearInterval(autoSlide));
    carruselLista.addEventListener("mouseenter", () => clearInterval(autoSlide));
  });