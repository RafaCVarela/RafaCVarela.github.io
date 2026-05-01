// Fonte única de verdade (SSOT) para projetos e posts.
// Sem referências a projetos sensíveis/órgãos públicos (conforme diretriz ética).

window.PORTFOLIO = {
  projects: [
    {
      title: "Baja SAE - Eletrônica",
      desc: "Integração de powertrain e sensores para o carro Baja Capoeira da UFBA.",
      link: "#",
      category: "arduino",
      thumb: "/assets/baja.png",
      thumbAlt: "Carro Baja SAE com destaque para eletrônica embarcada"
    },
    {
      title: "API Fotos-Marketplace",
      desc: "Backend em Laravel para marketplace de fotografias.",
      link: "https://github.com/rafael/fotos",
      category: "websites",
      thumb: "/assets/marketplace.png",
      thumbAlt: "Imagem ilustrativa de marketplace de fotos"
    },
    {
      title: "Automação IoT ESP32",
      desc: "Controle de sensores e atuadores via protocolo MQTT.",
      link: "#",
      category: "arduino",
      thumb: "/assets/esp32.png",
      thumbAlt: "Placa ESP32 com sensores em bancada"
    },
    {
      title: "Monitoramento Industrial",
      desc: "Dashboard para produtividade com IA aplicada.",
      link: "#",
      category: "websites",
      thumb: "/assets/industrial.png",
      thumbAlt: "Dashboard de monitoramento industrial com gráficos"
    },
    {
      title: "Integração de Sensores com ESP-IDF",
      desc: "Desenvolvimento de baixo nível para aquisição de dados em tempo real.",
      link: "#",
      category: "arduino",
      thumb: "/assets/sensores.png",
      thumbAlt: "Sensores conectados a microcontrolador para aquisição de dados"
    }
  ],

  // Blog estático via array de objetos (você pode ajustar os textos depois)
  posts: [
    {
      slug: "otimizacao-seo-html-semantico",
      title: "SEO prático com HTML semântico (sem frameworks)",
      excerpt: "Como estruturar header/main/article e melhorar títulos, meta description e acessibilidade.",
      date: "2026-05-01",
      tags: ["seo", "html", "acessibilidade"]
    },
    {
      slug: "cards-minimalistas-ui",
      title: "Design minimalista com cards reutilizáveis em CSS puro",
      excerpt: "Tokens, radius, sombras e grid responsivo para manter consistência visual no GitHub Pages.",
      date: "2026-04-20",
      tags: ["css", "ui", "performance"]
    },
    {
      slug: "filtros-js-vanilla",
      title: "Filtros de Projetos com JavaScript puro",
      excerpt: "Um padrão simples e rápido para filtrar cards por categoria sem dependências.",
      date: "2026-04-10",
      tags: ["javascript", "vanilla", "ui"]
    }
  ]
};
