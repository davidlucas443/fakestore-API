# 🛒 Consumo de API com JavaScript Assíncrono

## 📌 Descrição do Projeto

Este projeto é uma aplicação web simples que consome dados da **FakeStore API** utilizando **JavaScript assíncrono**.

A aplicação realiza uma requisição HTTP para obter uma lista de produtos e exibe essas informações dinamicamente na interface, sem recarregar a página.

Durante o carregamento dos dados, é exibida uma mensagem de **loading**, e caso ocorra algum erro na requisição, uma mensagem de erro é apresentada ao usuário.

---

## 🎯 Objetivos de Aprendizagem

* Consumir dados de uma **API REST**
* Utilizar **Fetch API**
* Trabalhar com **programação assíncrona (Promises)**
* Manipular elementos da página com **DOM**
* Renderizar dados dinamicamente em uma interface web

---

## 🧰 Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* **Fetch API**

---

## 🌐 API Utilizada

Este projeto utiliza a **FakeStore API**, uma API pública que simula dados de um e-commerce.

Documentação da API:

https://fakestoreapi.com/

Endpoint utilizado:

```id="endpoint-products"
https://fakestoreapi.com/products
```

Esse endpoint retorna uma lista de produtos contendo:

* título do produto
* preço
* imagem
* descrição
* categoria

---

## 📁 Estrutura do Projeto

```id="estrutura-projeto"
projeto-fakestore
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### Descrição dos arquivos

* **index.html** → Estrutura da página
* **style.css** → Estilização da interface
* **script.js** → Lógica da aplicação e consumo da API
* **README.md** → Documentação do projeto

---

## ⚙️ Funcionalidades

* Buscar produtos da **FakeStore API**
* Exibir mensagem de **carregamento (loading)** enquanto os dados são buscados
* Renderizar produtos dinamicamente na página
* Exibir:

  * título
  * preço
  * imagem do produto
* Tratar erros de requisição e mostrar mensagem ao usuário

---

## 🔄 Fluxo da Aplicação

1. A página é carregada
2. O JavaScript seleciona os elementos HTML necessários:

   * loading
   * container de produtos
   * área de erro
3. Uma requisição é feita para a **FakeStore API**
4. Se a resposta for válida:

   * o loading é removido
   * os produtos são exibidos em formato de **cards**
5. Caso ocorra erro:

   * o loading é removido
   * uma mensagem de erro é exibida

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:

```id="clone-repo"
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Entre na pasta do projeto:

```id="cd-projeto"
cd seu-repositorio
```

3. Abra o arquivo **index.html** no navegador.

Ou utilize **Live Server** no VS Code.

---

## 🔗 Exemplo de Requisição

A aplicação faz a seguinte requisição:

```id="exemplo-fetch"
fetch('https://fakestoreapi.com/products')
```

Exemplo de resposta da API:

```json id="exemplo-json"
[
  {
    "id": 1,
    "title": "Produto exemplo",
    "price": 29.99,
    "image": "https://..."
  }
]
```

---

## 📚 Conceitos Trabalhados

* Consumo de **APIs REST**
* **Requisições HTTP**
* **Fetch API**
* **Promises (.then / .catch)**
* Manipulação do **DOM**
* Renderização dinâmica de conteúdo

---

## ✅ Boas Práticas Aplicadas

* Separação entre **HTML, CSS e JavaScript**
* Código organizado
* Nomes de variáveis claros
* Tratamento de erros em requisições
* Interface simples e legível

---

## 👨‍💻 Autor

Projeto desenvolvido para prática de **consumo de API com JavaScript assíncrono** utilizando a **FakeStore API**.
