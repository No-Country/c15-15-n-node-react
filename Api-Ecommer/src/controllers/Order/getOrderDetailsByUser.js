const getOrderDetailsByUserHandler = require('../../handlers/Order/getOrderDetailsByUserHandler');

const getOrderDetailsByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await getOrderDetailsByUserHandler(userId);
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = getOrderDetailsByUser;
