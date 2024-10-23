import "./style.css";

document.querySelector("#app").innerHTML = `
   <div class="myvideo">
      <img src="/c.jpg" alt="profile picture" class="profile-picture" id="profilePicture" />
   </div>
   <div class="profile-name">@follow</div>
   <!-- Links-->
   <a href="https://test-brown-eta.vercel.app/" target="_blank" class="links">Web Agency</a>
   <a href="https://boton-dark.vercel.app/" target="_blank" class="links">Paper Text</a>
   <a href="https://stickynavbar.vercel.app/" target="_blank" class="links">Navbar Sticky</a>
   <div class="bottom-text">2024</div>
`;

const profilePicture = document.getElementById("profilePicture");

async function copyLink(e) {
  e.preventDefault();
  const currentURL = window.location.href; // Obtiene la URL actual
  try {
    await navigator.clipboard.writeText(currentURL); // Copia la URL al portapapeles
    alert("Link copiado: " + currentURL); // Mensaje de confirmación
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

// Agrega el evento de clic a la imagen
profilePicture.addEventListener("click", copyLink);
