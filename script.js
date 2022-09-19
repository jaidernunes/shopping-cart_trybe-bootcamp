// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 
// const saveCartItems = require("./helpers/saveCartItems");
// const { remove } = require("cypress/types/lodash");

const cartItemsOL = document.querySelector('.cart__items');
const cart = document.querySelector('.cart');

getSavedCartItems();

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
// const createCustomElementBTN = (element, className, innerText, id) => {
//   const e = document.createElement(element);
//   e.className = className;
//   e.innerText = innerText;
//   e.addEventListener('click', addToCart);
//   return e;
// };

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.id = id;
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', (event) => {
    event.target.remove();
    saveCartItems();
  }); // cartItemClickListener
  return li;
};

// function adds item to cart
const addToCart = async (event) => {
  const itemByID = await fetchItem(event.target.parentElement.firstChild.innerText);
  const cartItem = createCartItemElement(itemByID);
  cartItemsOL.appendChild(cartItem);
  saveCartItems();
};
// essa funçao cria lista de produtos
const listProductItems = async () => {
  const response = await fetchProducts('computador');
  const products = await response.results;
  products.forEach(async (product) => {
    const items = document.querySelector('.items');
    const productItem = createProductItemElement(product);
    productItem.lastElementChild.addEventListener('click', addToCart);
    items.appendChild(productItem);
  });
};

window.onload = async () => { 
  await listProductItems();
};
