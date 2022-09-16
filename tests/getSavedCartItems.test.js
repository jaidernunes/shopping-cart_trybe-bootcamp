const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('2 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui  
  // test('if its a function', () => {
  //   expect(typeof saveCartItems).toEqual('function');
  // });

  test('if localStorage.setItem has been called', () => {
    getSavedCartItems('cartItems')// localStorage.setItem();
    expect(localStorage.getItem).toBeCalled();
  });

  test(`if localStorage.setItem has been called with 'cartItems'`, () => {
    getSavedCartItems('cartItems')// localStorage.setItem();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
