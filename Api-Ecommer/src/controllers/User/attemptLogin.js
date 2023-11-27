const attemptLoginHandler = require('../../handlers/User/attemptLoginHandler');

const attemptLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await attemptLoginHandler(email, password);
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = attemptLogin;
