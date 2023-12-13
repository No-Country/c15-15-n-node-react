const addDetailToOrderHandler = require('../../handlers/Detailorder/addDetailToOrderHandler');

const addDetailToOrder = async (req, res) => {
  const { id } = req.params; // ID de la orden
  const data = req.body; // Datos del detalle de la orden
  try {
    const detail = await addDetailToOrderHandler(id, data);
    res.status(200).json(detail);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = addDetailToOrder;
