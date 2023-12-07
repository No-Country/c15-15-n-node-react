const updateUserHandler = require('../../handlers/User/updateUserHandler');

const updateUser = async (req, res, next) => {
  const data = req.body;
  try {
    const user = await updateUserHandler(data);
    res.status(200).json(user);
  } catch (error) {
    next(error); // Pass the error to your error handling middleware
  }
};

module.exports = updateUser;
