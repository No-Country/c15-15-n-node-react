const { Product } = require('../../db');

const updateProductHandler = async (id, productData) => {
  let product = await Product.findOne({
    where: {
      id: id,
      isActive: true,
    },
  });

  if (!product) {
    throw new Error('Product not found');
  }

  await product.update(productData);

  return product;
};

module.exports = updateProductHandler;
