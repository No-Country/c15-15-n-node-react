const reactivateUserHandler = require('../../handlers/User/reactivateUserHandler');

const reactivateUser = async (req, res) => {
  const { id } = req.params;
  try {
    await reactivateUserHandler(id);
    res.status(200).json({ message: 'User has been successfully reactivated' });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request' });
  }
};

module.exports = reactivateUser;
