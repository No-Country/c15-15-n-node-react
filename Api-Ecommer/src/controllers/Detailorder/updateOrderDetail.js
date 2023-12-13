const updateOrderDetailHandler = require('../../handlers/Detailorder/updateOrderDetailHandler');

const updateOrderDetail = async (req, res) => {
  const { id, detailId } = req.params; // ID de la orden y del detalle
  const data = req.body; // Datos actualizados del detalle de la orden
  try {
    const detail = await updateOrderDetailHandler(id, detailId, data);
    res.status(200).json(detail);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = updateOrderDetail;
