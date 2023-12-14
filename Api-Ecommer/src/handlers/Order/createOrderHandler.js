const { Order } = require('../../db');

const createOrderHandler = async (data) => {
  try {
    const order = await Order.create(data);
    return { message: 'The order has been successfully created', order };
  } catch (error) {
    console.error(error.message);
    throw new Error('An error occurred while processing your request');
  }
};

module.exports = createOrderHandler;
