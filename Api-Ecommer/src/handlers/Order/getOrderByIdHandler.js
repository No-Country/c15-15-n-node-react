const { Order } = require('../../db');

const getOrderByIdHandler = async (id) => {
  try {
    const order = await Order.findOne({ where: { id } });
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  } catch (error) {
    console.error(error.message);
    if (error.message === 'Order not found') {
      throw new Error('Order not found');
    } else {
      throw new Error('An error occurred while processing your request');
    }
  }
};

module.exports = getOrderByIdHandler;
