const deleteUserHandler = require('../../handlers/User/deleteUserHandler');

const deleteUser = async (req, res) => {
  const data = req.body;
  try {
    const result = await deleteUserHandler(data);
    res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = deleteUser;
