const { Router } = require('express');

const {
  createProduct,
  getAllProducts,
  getProducts,
  updateProduct,
  deleteProduct,
  reactivateProduct,
} = require('../../controllers/Product');

const { postProductValidation } = require('../../middlewares/Product');

const router = Router();

router.post('/products', postProductValidation, createProduct);
router.get('/products', getAllProducts);
router.get('/product', getProducts);
router.put('/products/:id', updateProduct);
router.put('/product/:id', reactivateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
