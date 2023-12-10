const deleteProductHandler = require('../../handlers/Product/deleteProductHandler');

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await deleteProductHandler(req.params.id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteProduct;
