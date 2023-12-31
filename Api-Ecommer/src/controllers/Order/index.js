const createOrder = require('../Order/createOrder');
const getAllOrders = require('../Order/getAllOrders');
const getOrderById = require('../Order/getOrderById');
const updateOrder = require('../Order/updateOrder');
const deleteOrder = require('../Order/deleteOrder');
const getOrderDetailsByUser = require('../Order/getOrderDetailsByUser');

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrderDetailsByUser,
};
