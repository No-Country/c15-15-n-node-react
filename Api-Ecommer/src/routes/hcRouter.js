const { Router } = require('express');

const router = Router();

router.get('/hc', (req, res) => {
  // healthcheck
  res.status(200).send('OK');
});

module.exports = router;
