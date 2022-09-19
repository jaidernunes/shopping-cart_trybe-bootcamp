const saveCartItems = (itemsInCart) => {
  // seu código aqui
  // const cartItemsOL = document.querySelector('.cart__items');
  localStorage.setItem('cartItems', itemsInCart);
};
// refatorar param mentoria vitu
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
