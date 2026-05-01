document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("home-posts");
  if (!mount || !window.PORTFOLIO) return;

  const posts = (window.PORTFOLIO.posts || []).slice(0, 3);

  if (!posts.length) {
    mount.innerHTML = `<p class="muted">Sem posts ainda.</p>`;
    return;
  }

  mount.innerHTML = posts.map((p) => `
    <article class="card col-12 col-4">
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.excerpt}</p>
        <div class="card-meta">
          <span class="chip">${p.date}</span>
          <a class="btn" href="/blog.html#${p.slug}" aria-label="Ler mais: ${p.title}">Ler</a>
        </div>
      </div>
    </article>
  `).join("");
});
