const { Order, Detailorder, Product } = require('../../db');

const addDetailToOrderHandler = async (id, data) => {
  const { productId, quantity } = data;
  const order = await Order.findOne({ where: { id } });
  if (!order) {
    throw new Error('Order not found');
  }
  const product = await Product.findOne({ where: { id: productId } });
  if (!product) {
    throw new Error('Product not found');
  }
  if (product.stock < quantity) {
    throw new Error('Not enough stock for the product');
  }
  const income = product.price * quantity;
  const detail = await Detailorder.create({ ...data, OrderId: id, income });
  await detail.setProduct(product);
  await Product.update(
    { stock: product.stock - quantity },
    { where: { id: productId } },
  );
  if (product.stock - quantity === 0) {
    await Product.update({ isActive: false }, { where: { id: productId } });
  }
  return { message: 'Detail has been successfully added to the order', detail };
};

module.exports = addDetailToOrderHandler;
