
const loadingProduto = document.getElementById('loading');
const produto = document.getElementById('produto');
const error = document.getElementById('error');

async function carregarProdutos() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    loadingProduto.style.display = 'none';

    produto.innerHTML = data.map(item => `
      <div class="produto-card">
        <h2>${item.title}</h2>
        <p>Preço: $${item.price}</p>
        <img src="${item.image}" alt="${item.title}" style="max-width: 200px;">
      </div>
    `).join('');

  } catch (err) {
    loadingProduto.style.display = 'none';
    error.innerHTML = `<p>Erro ao carregar os produtos: ${err.message}</p>`;
  }
}

carregarProdutos();