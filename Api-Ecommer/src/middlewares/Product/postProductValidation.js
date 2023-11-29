const postProductValidate = (req, res, next) => {
  const fields = ['name', 'description', 'price', 'stock'];

  for (let field of fields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `Missing ${field}` });
    }
  }

  next();
};

module.exports = postProductValidate;
