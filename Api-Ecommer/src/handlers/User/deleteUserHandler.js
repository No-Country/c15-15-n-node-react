const { User } = require('../../db');

const deleteUserHandler = async (data) => {
  const { email } = data;

  try {
    const foundUser = await User.findOne({
      where: {
        email,
      },
    });
    if (!foundUser) {
      throw new Error('No user found with that email');
    } else {
      await User.destroy({
        where: {
          email,
        },
      });
      return { message: 'The user has been successfully deleted' };
    }
  } catch (error) {
    console.error(error.message);
    if (error.message === 'No user found with that email') {
      throw new Error('No user found with that email');
    } else {
      throw new Error('An error occurred while processing your request');
    }
  }
};

module.exports = deleteUserHandler;
