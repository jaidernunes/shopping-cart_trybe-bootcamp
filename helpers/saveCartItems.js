const saveCartItems = () => {
  // seu código aqui
  const cartItemsOL = document.querySelector('.cart__items');
  localStorage.setItem('cartItems', cartItemsOL.outerHTML);
};
// refatorar param
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
