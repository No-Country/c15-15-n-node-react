const { Product } = require('../../db');

const getAllProductsHandler = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        isActive: true,
      },
    });
    return products;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = getAllProductsHandler;
