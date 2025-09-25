document.addEventListener("DOMContentLoaded", function() {
    
    // Função para carregar um componente HTML em um elemento
    const loadComponent = (elementId, url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => {
                console.error('Falha ao carregar componente:', error);
                document.getElementById(elementId).innerHTML = `<p style="color:red;">Não foi possível carregar o ${elementId.replace('-container', '')}.</p>`;
            });
    };

    // Carrega o header e o footer nos placeholders
    loadComponent('header-container', 'layouts/header.html');
    loadComponent('footer-container', 'layouts/footer.html');
});