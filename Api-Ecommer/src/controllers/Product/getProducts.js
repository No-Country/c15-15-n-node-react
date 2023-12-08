const getProductsHandler = require('../../handlers/Product/getProductsHandler');

const getProducts = async (req, res) => {
  try {
    const products = await getProductsHandler(req.query);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProducts;
