const { Router } = require('express');

const {
  addDetailToOrder,
  getOrderDetails,
  updateOrderDetail,
  deleteOrderDetail,
} = require('../../controllers/Detailorder');

const router = Router();

router.post('/orders/:id/details', addDetailToOrder); // Agregar un detalle a una orden
router.get('/orders/:id/details', getOrderDetails); // Obtener los detalles de una orden
router.put('/orders/:id/details/:detailId', updateOrderDetail); // Actualizar un detalle de una orden
router.delete('/orders/:id/details/:detailId', deleteOrderDetail); // Eliminar un detalle de una orden

module.exports = router;
