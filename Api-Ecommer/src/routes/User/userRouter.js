const { Router } = require('express');

const { createUser } = require('../../controllers/User');

const { postUserValidate } = require('../../middlewares/User');

const router = Router();

router.post('/users', postUserValidate, createUser);

module.exports = router;
