const { Router } = require('express');

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrderDetailsByUser,
} = require('../../controllers/Order');

const router = Router();

router.post('/users/:userId/orders', createOrder); // Crear una nueva orden para un usuario específico
router.get('/orders', getAllOrders); // Obtener todas las ordenes
router.get('/order/:id', getOrderById); // Obtener una orden por su ID
router.put('/orders/:id', updateOrder); // Actualizar una orden por su ID
router.delete('/orders/:id', deleteOrder); // Eliminar (o desactivar) una orden por su ID
router.get('/user/:userId/orders', getOrderDetailsByUser);

module.exports = router;
