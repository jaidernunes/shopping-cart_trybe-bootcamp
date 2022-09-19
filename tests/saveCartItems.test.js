const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('2 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui  
  // test('if its a function', () => {
  //   expect(typeof saveCartItems).toEqual('function');
  // });
const itemsInCart = `<li id="MLB2038148851" class="cart__item">ID: MLB2038148851 | TITLE: Monitor Gamer LG Ultrawide 29wl500 Led 29&nbsp;  Preto 100v/240v | PRICE: $1489</li>`
  test('if localStorage.setItem has been called', () => {
    saveCartItems(itemsInCart)// localStorage.setItem();
    expect(localStorage.setItem).toBeCalled();
  });

  test('if localStorage.setItem has been called with both parameters', () => {
    saveCartItems(itemsInCart)// localStorage.setItem();
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', itemsInCart);
  });
});
