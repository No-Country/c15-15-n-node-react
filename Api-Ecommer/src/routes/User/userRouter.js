const { Router } = require('express');

const { createUser, attemptLogin } = require('../../controllers/User');

const { postUserValidate } = require('../../middlewares/User');

const router = Router();

router.post('/users', postUserValidate, createUser);
router.post('/users/login', attemptLogin);

module.exports = router;
