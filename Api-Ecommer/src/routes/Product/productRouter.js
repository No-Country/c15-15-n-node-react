const { Router } = require('express');

const {
  createProduct,
  getAllProducts,
  getProducts,
} = require('../../controllers/Product');

const { postProductValidation } = require('../../middlewares/Product');

const router = Router();

router.post('/products', postProductValidation, createProduct);
router.get('/products', getAllProducts);
router.get('/product', getProducts);

module.exports = router;
