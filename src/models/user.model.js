const sequelize = require("sequelize");
// const { FOREIGNKEYS } = require("sequelize/types/lib/query-types");

module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define("User", {
    id: {
      type: Datatypes.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fullName: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    phone: {
      type: Datatypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    photoUrl: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  User.associate = function(models) {
    User.hasMany(models.Product, {as: 'user_product'})
  };
  return User;
};

