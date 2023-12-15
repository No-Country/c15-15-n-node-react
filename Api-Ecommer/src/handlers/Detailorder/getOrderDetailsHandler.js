const { Order, Detailorder, Product } = require('../../db');

const getOrderDetailsHandler = async (id) => {
  const order = await Order.findOne({ where: { id } });
  if (!order) {
    throw new Error('Order not found');
  }
  const details = await Detailorder.findAll({
    where: { OrderId: id, isActive: true },
    include: [Product],
  });
  return details;
};

module.exports = getOrderDetailsHandler;
