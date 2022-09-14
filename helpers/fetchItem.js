const fetchItem = async (itemID) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${itemID}`;
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return json;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
