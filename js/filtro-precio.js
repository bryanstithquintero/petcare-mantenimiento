// HU-01: filtra los servicios por precio máximo al pulsar "Aplicar filtros".
(function () {
  const select = document.getElementById("fp");
  const boton = document.querySelector('aside[aria-label="Filtros"] button');
  const resultados = document.querySelector('section[aria-label="Resultados"]');
  if (!select || !boton || !resultados) return;

  const contador = resultados.querySelector("p.muted");
  const tarjetas = [...resultados.querySelectorAll("article")];
  const precioDe = (texto) => Number(texto.replace(/\D/g, "")) || Infinity;

  boton.addEventListener("click", () => {
    const maximo = precioDe(select.value);
    let visibles = 0;
    tarjetas.forEach((tarjeta) => {
      const precio = precioDe(tarjeta.querySelector("strong").textContent);
      const mostrar = precio <= maximo;
      tarjeta.hidden = !mostrar;
      if (mostrar) visibles += 1;
    });
    contador.textContent = visibles === 0
      ? "No hay servicios por debajo de ese precio. Prueba con un precio mayor."
      : `${visibles} ${visibles === 1 ? "servicio" : "servicios"} de peluquería en Chapinero y alrededores`;
  });
})();
