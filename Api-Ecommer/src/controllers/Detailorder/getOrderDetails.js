const getOrderDetailsHandler = require('../../handlers/Detailorder/getOrderDetailsHandler');

const getOrderDetails = async (req, res) => {
  const { id } = req.params; // ID de la orden
  try {
    const details = await getOrderDetailsHandler(id);
    res.status(200).json(details);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = getOrderDetails;
