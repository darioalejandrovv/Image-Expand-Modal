//Relaciono las ClassName con constantes de JS

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

// escucho el evento click para cada imagen de preview y en cuanto pase agrego la className "open" al Modal de fondo e imagen original
previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");

    //Obtengo el texto de etiqueta "data original" y hago cambio dinámico de texto e imagen
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./full/${originalSrc}`;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});
//pendiente al evento click de la ventana modal fuera de la imagen ampliada para remover ClassName "open" del modal e Imagen original
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
