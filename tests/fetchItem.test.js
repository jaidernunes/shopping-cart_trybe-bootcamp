require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui  
  test('if its a function', () => {
    expect(typeof fetchItem).toEqual('function');
  });

  test('if fetch has been called', async () => {
    const expected = await fetchItem('computador');
    await expect(fetch).toBeCalled();
  });

  test('if fetch called `https://api.mercadolibre.com/items/MLB1615760527`', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  test('if the parameter `MLB1615760527` gives the expected return', async () => {
    const expected = await fetchItem('MLB1615760527');
    await expect(expected).toEqual(item);
  });
// REVISAR
  test('if it returns an error if no parameter is given', async () => {
    try {
      await fetchItem()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});

