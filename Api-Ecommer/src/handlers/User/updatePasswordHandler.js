const { User } = require('../../db');
const { comparePassword, hashPassword } = require('../../utils/passwordHasher');

const updatePasswordHandler = async (data) => {
  const { id, currentPassword, newPassword } = data;

  const user = await User.findByPk(id);

  if (!user || !user.isActive) {
    throw new Error(`User with id ${id} not found`);
  } else {
    const passwordMatch = await comparePassword(currentPassword, user.password);
    if (!passwordMatch) {
      throw new Error(`Incorrect password for id ${id}`);
    } else {
      const hashedPassword = await hashPassword(newPassword);
      await User.update(
        { password: hashedPassword },
        {
          where: { id: id, isActive: true },
          return: true,
          raw: true,
        },
      );
    }
    return `Password successfully updated`;
  }
};

module.exports = updatePasswordHandler;
