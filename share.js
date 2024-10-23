// share.js

// Selecciona todos los botones de compartir
const shareButtons = document.querySelectorAll(".tile-share-button");

// Función para copiar el texto al portapapeles
async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  console.log(link);

  try {
    await navigator.clipboard.writeText(link);
    alert("Copied the text: " + link);
  } catch (err) {
    console.error(err);
  }
}

// Añade el event listener a cada botón de compartir
shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);
