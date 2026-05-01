document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("blog-posts");
  if (!mount || !window.PORTFOLIO) return;

  const posts = window.PORTFOLIO.posts || [];
  if (!posts.length) {
    mount.innerHTML = `<p class="muted">Sem posts ainda.</p>`;
    return;
  }

  mount.innerHTML = posts.map((p) => `
    <article class="card col-12 col-6" id="${p.slug}">
      <div class="card-body">
        <h2 class="card-title">${p.title}</h2>
        <p class="card-desc">${p.excerpt}</p>
        <div class="card-meta">
          <span class="chip">${p.date}</span>
          ${(p.tags || []).slice(0, 3).map(t => `<span class="chip">${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
});
