const { User } = require('../../db');

const updateUserHandler = async ({ id, ...data }) => {
  const [updateCount, updatedUsers] = await User.update(data, {
    where: { id, isActive: true },
    returning: true,
  });

  if (updateCount === 0) {
    const error = new Error(`Can't update user with id ${id}`);
    error.status = 400;
    throw error;
  }

  return updatedUsers[0]; // Return the updated user
};

module.exports = updateUserHandler;
