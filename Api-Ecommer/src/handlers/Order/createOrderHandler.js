const { User, Detailorder, Product } = require('../../db');

const createOrderHandler = async (data) => {
  const { userId, productId, quantity } = data;
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    throw new Error('User not found');
  }
  const product = await Product.findOne({ where: { id: productId } });
  if (!product) {
    throw new Error('Product not found');
  }
  if (product.stock < quantity) {
    throw new Error('Not enough stock for the product');
  }
  const income = product.price * quantity;
  const order = await user.createOrder({ income });
  const detail = await Detailorder.create({
    ...data,
    OrderId: order.id,
    income,
  });
  await detail.setProduct(product);
  await Product.update(
    { stock: product.stock - quantity },
    { where: { id: productId } },
  );
  if (product.stock - quantity === 0) {
    await Product.update({ isActive: false }, { where: { id: productId } });
  }
  return { message: 'The order has been successfully created', order, detail };
};

module.exports = createOrderHandler;
