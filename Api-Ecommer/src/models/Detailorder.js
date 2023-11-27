const { DataTypes, Sequelize } = require('sequelize');

module.exports = (Sequelize) => {
  Sequelize.define(
    'Detailorder',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'The quantity field cannot be empty',
          },
        },
      },

      income: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'The income field cannot be empty',
          },
        },
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false },
  );
};
