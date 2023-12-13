const getAllOrdersHandler = require('../../handlers/Order/getAllOrdersHandler');

const getAllOrders = async (req, res) => {
  try {
    const orders = await getAllOrdersHandler();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = getAllOrders;
