const createOrderHandler = require('../../handlers/Order/createOrderHandler');

const createOrder = async (req, res) => {
  const { userId } = req.params; // Obtén el ID del usuario de los parámetros de la ruta
  const data = { ...req.body, userId }; // Incluye el ID del usuario en los datos de la orden
  try {
    const order = await createOrderHandler(data);
    res.status(200).json(order);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = createOrder;
