const updateOrderHandler = require('../../handlers/Order/updateOrderHandler');

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const order = await updateOrderHandler(id, data);
    res.status(200).json(order);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = updateOrder;
