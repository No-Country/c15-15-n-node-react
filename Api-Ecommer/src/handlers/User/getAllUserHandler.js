const { User } = require('../../db');

async function getAllUserHandler() {
  const users = await User.findAll({
    where: {
      isActive: true,
    },
  });
  return users;
}

module.exports = getAllUserHandler;
