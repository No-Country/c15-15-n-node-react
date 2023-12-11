const { Product } = require('../../db');

const deleteProductHandler = async (id) => {
  let product = await Product.findOne({
    where: {
      id: id,
      isActive: true,
    },
  });

  if (!product) {
    throw new Error('Product not found');
  }

  await product.update({ isActive: false });

  return { message: 'The product has been successfully discontinued' };
};

module.exports = deleteProductHandler;
