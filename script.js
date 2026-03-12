
// Selecionando elementos do DOM
const loadingProduto = document.getElementById('loading');
const produto = document.getElementById('produto');
const error = document.getElementById('error');

// Função assíncrona para carregar produtos da API
async function carregarProdutos() {
  try {
    // Fazendo a requisição para a API Fake Store
    const response = await fetch('https://fakestoreapi.com/products');

    // Verificando se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Convertendo a resposta para JSON
    const data = await response.json();

    // Escondendo o indicador de carregamento
    loadingProduto.style.display = 'none';

    // Renderizando os produtos no DOM
    produto.innerHTML = data.map(item => {
      // Pegando apenas as 4 primeiras palavras do título
      const palavras = item.title.split(' ').slice(0, 4).join(' ');
      return `
      <div class="produto-card">
        <h2>${palavras}</h2>
        <p>Preço: $${item.price}</p>
        <img src="${item.image}" alt="${item.title}" style="max-width: 200px;">
      </div>
    `;
    }).join('');

  } catch (err) {
    // Escondendo o indicador de carregamento em caso de erro
    loadingProduto.style.display = 'none';
    // Exibindo mensagem de erro
    error.innerHTML = `<p>Erro ao carregar os produtos: ${err.message}</p>`;
  }
}

// Chamando a função para carregar os produtos quando o script é executado
carregarProdutos();