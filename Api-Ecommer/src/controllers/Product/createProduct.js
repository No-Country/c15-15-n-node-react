const createProductHandler = require('../../handlers/Product/createProductHandler');

const createProduct = async (req, res) => {
  const data = req.body;
  try {
    const product = await createProductHandler(data);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = createProduct;
