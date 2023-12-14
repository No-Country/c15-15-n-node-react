const { Product } = require('../../db');

const getProductsHandler = async ({ category, subcategory }) => {
  let products;
  if (category && subcategory) {
    products = await Product.findAll({
      where: {
        category: category,
        subcategory: subcategory,
        isActive: true,
      },
    });
  } else if (category) {
    products = await Product.findAll({
      where: {
        category: category,
        isActive: true,
      },
    });
  } else if (subcategory) {
    products = await Product.findAll({
      where: {
        subcategory: subcategory,
        isActive: true,
      },
    });
  }
  return products;
};

module.exports = getProductsHandler;
