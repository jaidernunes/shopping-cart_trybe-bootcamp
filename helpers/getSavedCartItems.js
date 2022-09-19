const getSavedCartItems = (param) => {
  // seu código aqui
  // const defaultOL = '<ol class="cart__items"></ol>';
  const cartOL = param;
  cartOL.innerHTML = localStorage.getItem('cartItems');
  };

// refatorar param passar no teste, restante da funçao no script.js
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
