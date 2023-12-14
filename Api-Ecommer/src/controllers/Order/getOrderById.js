const getOrderByIdHandler = require('../../handlers/Order/getOrderByIdHandler');

const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await getOrderByIdHandler(id);
    res.status(200).json(order);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = getOrderById;
