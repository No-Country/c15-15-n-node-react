const createUser = require('./createUser');
const attemptLogin = require('./attemptLogin');
const forgotPassword = require('./forgotPassword');
const updatePassword = require('./updatePassword');
const getAllUser = require('./getAllUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const softDeleteUser = require('./softDeleteUser');
const reactivateUser = require('./reactivateUser');

module.exports = {
  createUser,
  attemptLogin,
  forgotPassword,
  updatePassword,
  getAllUser,
  updateUser,
  deleteUser,
  softDeleteUser,
  reactivateUser,
};
