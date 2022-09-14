require('../mocks/fetchSimulator');
// const { expect } = require('chai');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('2 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui  
  test('if its a function', () => {
    expect(typeof fetchProducts).toEqual('function');
  });

  test('if fetch has been called', async () => {
    const expected = await fetchProducts('computador');
    await expect(fetch).toBeCalled();
  });

  test('if fetch called `https://api.mercadolibre.com/sites/MLB/search?q=computador`', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('if the parameter `computador` gives the expected return', async () => {
    const expected = await fetchProducts('computador');
    await expect(expected).toEqual(computadorSearch);
  });

  test('if it returns an error if no parameter is given', async () => {
    try {
      await fetchProducts()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
