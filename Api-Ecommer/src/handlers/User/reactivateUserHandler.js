const { User } = require('../../db');

const reactivateUserHandler = async (id) => {
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new Error('User not found');
    } else {
      await User.update({ isActive: true }, { where: { id } });
    }
  } catch (error) {
    console.error(error.message);
    if (error.message === 'User not found') {
      throw new Error('User not found');
    } else {
      throw new Error('An error occurred while processing your request');
    }
  }
};

module.exports = reactivateUserHandler;
