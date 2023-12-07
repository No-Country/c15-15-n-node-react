const { Product } = require('../../db');

const createProductHandler = async (data) => {
  const product = await Product.create({
    name: data.name,
    description: data.description,
    price: data.price,
    stock: data.stock,
    category: data.category,
    subcategory: data.subcategory,
  });
  return product;
};

module.exports = createProductHandler;
