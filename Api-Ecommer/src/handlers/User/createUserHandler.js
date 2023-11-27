const { User } = require('../../db');
const { hashPassword } = require('../../utils/passwordHasher');

const createUserHandler = async (data) => {
  const { email, password } = data;

  try {
    const hashedPassword = await hashPassword(password);
    const foundUser = await User.findOne({
      where: {
        email,
      },
    });
    data = { ...data, password: hashedPassword, isActive: true };
    if (foundUser) {
      throw new Error('User already registered with that email');
    } else {
      const created = await User.create(data);
      return created;
    }
  } catch (error) {
    console.error(error.message);
    if (error.message === 'User already registered with that email') {
      throw new Error('User already registered with that email');
    } else {
      throw new Error('An error occurred while processing your request');
    }
  }
};

module.exports = createUserHandler;
