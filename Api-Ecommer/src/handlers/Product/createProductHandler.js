const { Product } = require('../../db');

const createProductHandler = async (data) => {
  const product = await Product.create(data);
  return product;
};

module.exports = createProductHandler;
