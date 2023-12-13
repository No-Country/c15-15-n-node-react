const deleteOrderDetailHandler = require('../../handlers/Detailorder/deleteOrderDetailHandler');

const deleteOrderDetail = async (req, res) => {
  const { id, detailId } = req.params; // ID de la orden y del detalle
  try {
    await deleteOrderDetailHandler(id, detailId);
    res.status(200).json({ message: 'Detail has been successfully deleted' });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = deleteOrderDetail;
