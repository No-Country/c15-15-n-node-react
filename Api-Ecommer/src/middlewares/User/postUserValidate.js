const postUserValidate = (req, res, next) => {
  const fields = [
    'name',
    'lastName',
    'address',
    'city',
    'country',
    'phoneNumber',
    'email',
    'password',
  ];

  for (let field of fields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `Missing ${field}` });
    }
  }

  next();
};
module.exports = postUserValidate;
