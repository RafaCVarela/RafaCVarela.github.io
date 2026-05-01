document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("[data-projects]");
  if (!container) return;

  const buttons = document.querySelectorAll("[data-filter]");
  const cards = container.querySelectorAll("[data-category]");

  const setActive = (value) => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === value)));

    cards.forEach((card) => {
      const categories = (card.dataset.category || "")
        .split(",")
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean);

      const show = value === "all" ? true : categories.includes(value);
      card.hidden = !show;
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setActive(btn.dataset.filter));
  });

  // default
  setActive("all");
});
