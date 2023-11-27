const forgotPasswordHandler = require('../../handlers/User/forgotPasswordHandler');

const forgotPassword = async (req, res) => {
  const data = req.body;
  try {
    const msg = await forgotPasswordHandler(data);
    res.status(200).send(msg);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = forgotPassword;
