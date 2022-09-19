const getSavedCartItems = () => {
  // seu código aqui
  // const defaultOL = '<ol class="cart__items"></ol>';
  const cartItemsOL = document.querySelector('.cart__items');
  cartItemsOL.outerHTML = localStorage.getItem('cartItems');
  
  // adding listener to remove new items
  // const newCartItems = document.querySelectorAll('.cart__item');
  // newCartItems.forEach((item) => item.addEventListener('click', (event) => {
  //   event.target.remove();
  //   localStorage.setItem('cartItems', cartItemsOL.outerHTML);
  // }));
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
