const { Order } = require('../../db');

const updateOrderHandler = async (id, data) => {
  try {
    const order = await Order.findOne({ where: { id } });
    if (!order) {
      throw new Error('Order not found');
    }
    await Order.update(data, { where: { id } });
    return { message: 'The order has been successfully updated' };
  } catch (error) {
    console.error(error.message);
    if (error.message === 'Order not found') {
      throw new Error('Order not found');
    } else {
      throw new Error('An error occurred while processing your request');
    }
  }
};

module.exports = updateOrderHandler;
