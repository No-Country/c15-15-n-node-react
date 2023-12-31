const { Router } = require('express');

const {
  createUser,
  attemptLogin,
  forgotPassword,
  updatePassword,
  getAllUser,
  updateUser,
  deleteUser,
  softDeleteUser,
  reactivateUser,
} = require('../../controllers/User');

const {
  postUserValidate,
  forgotPasswordValidation,
  updatePasswordValidation,
} = require('../../middlewares/User');

const router = Router();

router.post('/users', postUserValidate, createUser);
router.post('/users/login', attemptLogin);
router.post('/users/forgotpassword', forgotPasswordValidation, forgotPassword);
router.put('/users/updatePassword', updatePasswordValidation, updatePassword);
router.put('/users/updateUser', updateUser);
router.get('/users', getAllUser);
router.delete('/users', deleteUser);
router.delete('/users/:id', softDeleteUser);
router.put('/users/:id', reactivateUser);

module.exports = router;
