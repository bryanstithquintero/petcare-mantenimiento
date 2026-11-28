// Interacciones mínimas del prototipo (sin lógica de negocio real)
(function () {
  const isWireframe = new URLSearchParams(location.search).has("wf");
  if (isWireframe) {
    document.documentElement.classList.add("wf");
    document.querySelectorAll("a[href$='.html']").forEach((a) => {
      a.href = a.getAttribute("href") + "?wf";
    });
    document.querySelectorAll("form[action]").forEach((f) => {
      f.action = f.getAttribute("action") + "?wf";
      f.insertAdjacentHTML("beforeend", '<input type="hidden" name="wf" value="1">');
    });
  }

  document.querySelectorAll("[data-toggle-group]").forEach((group) => {
    group.addEventListener("click", (e) => {
      const btn = e.target.closest("button[aria-pressed]");
      if (!btn || btn.disabled) return;
      group.querySelectorAll("button[aria-pressed]").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      const output = document.querySelector(group.dataset.output || "");
      if (output) output.textContent = btn.dataset.label || btn.textContent.trim();
    });
  });

  const barra = document.querySelector(".topbar");
  const menu = barra && barra.querySelector(".nav");
  if (menu) {
    menu.id = "menu-principal";
    const botonMenu = document.createElement("button");
    botonMenu.type = "button";
    botonMenu.className = "btn btn-secondary btn-sm menu-toggle";
    botonMenu.textContent = "Menú";
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-controls", "menu-principal");
    botonMenu.addEventListener("click", () => {
      const abierto = barra.classList.toggle("nav-open");
      botonMenu.setAttribute("aria-expanded", String(abierto));
      botonMenu.textContent = abierto ? "Cerrar" : "Menú";
    });
    barra.querySelector(".brand").after(botonMenu);
  }

  const compareChecks = document.querySelectorAll("input[data-compare]");
  const counter = document.querySelector("#compare-count");
  const compareBtn = document.querySelector("#compare-btn");
  const refreshCompare = () => {
    const selected = [...compareChecks].filter((c) => c.checked).length;
    if (counter) counter.textContent = selected;
    if (compareBtn) compareBtn.setAttribute("aria-disabled", selected < 2 ? "true" : "false");
  };
  compareChecks.forEach((c) => c.addEventListener("change", refreshCompare));
  if (compareBtn) {
    compareBtn.addEventListener("click", (e) => {
      if (compareBtn.getAttribute("aria-disabled") === "true") e.preventDefault();
    });
  }
  refreshCompare();
})();
