const updateProductHandler = require('../../handlers/Product/updateProductHandler');

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await updateProductHandler(req.params.id, req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateProduct;
