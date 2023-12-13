const { User } = require('../../db');

async function getAllUserHandler() {
  const users = await User.findAll();
  return users;
}

module.exports = getAllUserHandler;
