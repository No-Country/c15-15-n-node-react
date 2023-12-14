const { Order, Detailorder } = require('../../db');

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
    await Detailorder.update({ isActive: false }, { where: { id: detailId } });
  }
};

module.exports = deleteOrderDetailHandler;
