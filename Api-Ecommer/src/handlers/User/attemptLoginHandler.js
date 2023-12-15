const { User } = require('../../db');
const { comparePassword } = require('../../utils/passwordHasher');

const attemptLoginHandler = async (email, password) => {
  try {
    const user = await User.findOne({
      where: { email: email, isActive: true },
    });
    if (!user) {
      throw new Error(`There's no user matching email ${email}`);
    }
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
      throw new Error(`Incorrect password for email ${email}`);
    }
    return { message: 'Access granted. Login successful.' };
  } catch (error) {
    console.error(error.message);
    throw new Error('An error occurred while processing your request');
  }
};

module.exports = attemptLoginHandler;
