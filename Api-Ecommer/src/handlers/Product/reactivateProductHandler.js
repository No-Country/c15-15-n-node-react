const { Product } = require('../../db');

const reactivateProductHandler = async (id) => {
  let product = await Product.findOne({
    where: {
      id: id,
      isActive: false,
    },
  });

  if (!product) {
    throw new Error('Product not found or already active');
  }

  await product.update({ isActive: true });

  return { message: 'The product has been successfully discharged' };
};

module.exports = reactivateProductHandler;
