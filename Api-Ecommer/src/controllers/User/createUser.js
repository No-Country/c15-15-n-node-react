const createUserHandler = require('../../handlers/User/createUserHandler');

const createUser = async (req, res) => {
  const data = req.body;
  try {
    const user = await createUserHandler(data);
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = createUser;
