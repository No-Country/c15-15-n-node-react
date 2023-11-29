const getAllProductsHandler = require('../../handlers/Product/getAllProductsHandler');

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await getAllProductsHandler(req, res);
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllProducts;
