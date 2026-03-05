// Seleciona os elementos HTML
const loadingProduto = document.getElementById('loading');
const produto = document.getElementById('produto');
const error = document.getElementById('error');

// Faz requisição na API do fake store
fetch('https://fakestoreapi.com/products')
  .then(response => {
    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Converte a resposta para JSON
    return response.json();
  })
  .then(data => {
    // Remove o carregamento da tela
    loadingProduto.style.display = 'none';

    // Cria os cards de produtos com os dados recebidos
    produto.innerHTML = data.map(item => `
        <div class="produto-card">
            <h2>${item.title}</h2>
            <p>Preço: $${item.price}</p>
            <img src="${item.image}" alt="${item.title}" style="max-width: 200px;">
        </div>
    `).join('');
  })
  .catch(err => {
    // Caso ocorra erro, mostra a mensagem de erro
    loadingProduto.style.display = 'none';
    error.innerHTML = `<p>Erro ao carregar os produtos: ${err.message}</p>`;
  });