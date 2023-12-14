const { Order } = require('../../db');

const getAllOrdersHandler = async () => {
  try {
    const orders = await Order.findAll();
    return orders;
  } catch (error) {
    console.error(error.message);
    throw new Error('An error occurred while processing your request');
  }
};

module.exports = getAllOrdersHandler;
