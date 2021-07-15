module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("Blog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // tag: {
    //   type: DataTypes.,
    //   allowNull: false,
    //   validate: {
    //     notEmpty: true,
    //   },
    // },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    content: {
      type: DataTypes.STRING(10000),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Blog;
};
