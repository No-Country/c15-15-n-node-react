const { Router } = require('express');

const { createProduct } = require('../../controllers/Product');
const { getAllProducts } = require('../../controllers/Product');

const { postProductValidation } = require('../../middlewares/Product');

const router = Router();

router.post('/products', postProductValidation, createProduct);
router.get('/products', getAllProducts);

module.exports = router;
