const getAllUserHandler = require('../../handlers/User/getAllUserHandler');

async function getAllUser(req, res) {
  try {
    const users = await getAllUserHandler();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getAllUser;
