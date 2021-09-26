const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    orderId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    deliveryLocation: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   notEmpty: true,
      // },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   notEmpty: true,
      // },
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      // validate: {
      //   notEmpty: true,
      // },
    },
    orderItems: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   notEmpty: true,
      // },
    },
  });

  return Order;
};
