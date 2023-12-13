const { Order, Detailorder, Product } = require('../../db');

const updateOrderDetailHandler = async (id, detailId, data) => {
  const { productId, quantity } = data;
  const order = await Order.findOne({ where: { id } });
  if (!order) {
    throw new Error('Order not found');
  }
  const detail = await Detailorder.findOne({
    where: { id: detailId, OrderId: id },
  });
  if (!detail) {
    throw new Error('Detail not found');
  }
  const product = await Product.findOne({ where: { id: productId } });
  if (!product) {
    throw new Error('Product not found');
  }
  if (product.stock + detail.quantity < quantity) {
    throw new Error('Not enough stock for the product');
  }
  const income = product.price * quantity;
  await Detailorder.update({ ...data, income }, { where: { id: detailId } });
  await Product.update(
    { stock: product.stock + detail.quantity - quantity },
    { where: { id: productId } },
  );
  if (product.stock + detail.quantity - quantity === 0) {
    await Product.update({ isActive: false }, { where: { id: productId } });
  }
  return { message: 'Detail has been successfully updated', detail };
};

module.exports = updateOrderDetailHandler;
