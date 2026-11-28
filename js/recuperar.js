// HU-05: confirma el envío del enlace para restablecer la contraseña.
(function () {
  const formulario = document.getElementById("form-recuperar");
  if (!formulario) return;
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const correo = document.getElementById("email-recuperar").value.trim();
    document.getElementById("confirmacion").hidden = false;
    document.getElementById("correo-enviado").textContent = correo;
    formulario.hidden = true;
  });
})();
