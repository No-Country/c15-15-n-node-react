const { User } = require('../../db');
const { newPassword } = require('../../utils/newPassword');
const { hashPassword } = require('../../utils/passwordHasher');

const forgotPasswordHandler = async (data) => {
  const { email } = data;

  const user = await User.findOne({ where: { email } });

  if (!user || !user.isActive) {
    throw new Error(`User with email ${email} not found`);
  } else {
    const newRandomPassword = newPassword();
    const hashedPassword = await hashPassword(newRandomPassword);
    await User.update(
      { password: hashedPassword },
      { where: { email }, return: true, raw: true },
    );
    return { id: user.id, name: user.name, password: newRandomPassword };
  }
};

module.exports = forgotPasswordHandler;
