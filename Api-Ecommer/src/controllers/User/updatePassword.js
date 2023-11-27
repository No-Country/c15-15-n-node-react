const updatePasswordHandler = require('../../handlers/User/updatePasswordHandler');

const updatePassword = async (req, res) => {
  const data = req.body;
  try {
    const msg = await updatePasswordHandler(data);
    res.status(200).send(msg);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = updatePassword;
