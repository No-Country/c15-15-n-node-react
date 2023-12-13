const deleteOrderHandler = require('../../handlers/Order/deleteOrderHandler');

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteOrderHandler(id);
    res.status(200).json({ message: 'Order has been successfully deleted' });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = deleteOrder;
