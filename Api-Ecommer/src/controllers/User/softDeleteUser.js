const softDeleteUserHandler = require('../../handlers/User/softDeleteUserHandler');

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await softDeleteUserHandler(id);
    res.status(200).json({ message: 'User has been successfully deleted' });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = deleteUser;
