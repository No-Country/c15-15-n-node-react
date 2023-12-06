const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      orderStatus: {
        type: DataTypes.ENUM('completed', 'pending', 'canceled'),
        allowNull: false,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: true },
  );
};
