const { User, Order, Detailorder, Product } = require('../../db');

const getOrderDetailsByUserHandler = async (userId) => {
  try {
    const user = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Order,
          include: [
            {
              model: Detailorder,
              where: { isActive: true },
              include: [Product],
            },
          ],
        },
      ],
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    console.error(error.message);
    throw new Error('An error occurred while processing your request');
  }
};

module.exports = getOrderDetailsByUserHandler;
