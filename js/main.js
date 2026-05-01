document.addEventListener("DOMContentLoaded", function () {
  const loadComponent = async (elementId, url) => {
    try {
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) throw new Error(`Erro ao carregar ${url}: ${res.statusText}`);
      document.getElementById(elementId).innerHTML = await res.text();
    } catch (err) {
      console.error("Falha ao carregar componente:", err);
      document.getElementById(elementId).innerHTML =
        `<p style="color:red;">Não foi possível carregar o ${elementId.replace("-container", "")}.</p>`;
    }
  };

  await loadComponent("header-container", "layouts/header.html");
  await loadComponent("footer-container", "layouts/footer.html");

  // ano no footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // marca aba atual
  const path = (location.pathname || "/").toLowerCase();
  const key =
    path.includes("/projects/") ? "projects" :
    path.includes("/blog") ? "blog" :
    path.includes("/about") ? "about" :
    path.includes("/contact") ? "contact" :
    "home";

  document.querySelectorAll('[data-nav]').forEach((a) => {
    if (a.dataset.nav === key) a.setAttribute("aria-current", "page");
  });
});
