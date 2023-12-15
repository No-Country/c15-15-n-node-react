const { Order, Detailorder, Product } = require('../../db');

const deleteOrderDetailHandler = async (id, detailId) => {
  const order = await Order.findOne({ where: { id } });
  if (!order) {
    throw new Error('Order not found');
  }
  const detail = await Detailorder.findOne({
    where: { id: detailId, OrderId: id },
  });
  if (!detail) {
    throw new Error('Detail not found');
  } else {
    const product = await detail.getProduct();
    if (!product) {
      throw new Error('Product not found');
    }
    await Product.update(
      { stock: product.stock + detail.quantity },
      { where: { id: product.id } },
    );
    await Detailorder.update({ isActive: false }, { where: { id: detailId } });
  }
  return { message: 'Detail has been successfully removed from the order' };
};

module.exports = deleteOrderDetailHandler;
