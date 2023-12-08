const { Product } = require('../../db');

const getProductsHandler = async ({ category, subcategory }) => {
  let products;
  if (subcategory) {
    products = await Product.findAll({
      where: {
        category: category,
        subcategory: subcategory,
      },
    });
  } else {
    products = await Product.findAll({
      where: {
        category: category,
      },
    });
  }
  return products;
};

module.exports = getProductsHandler;
