const reactivateProductHandler = require('../../handlers/Product/reactivateProductHandler');

const reactivateProduct = async (req, res) => {
  try {
    const reactivatedProduct = await reactivateProductHandler(req.params.id);
    res.status(200).json(reactivatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = reactivateProduct;
