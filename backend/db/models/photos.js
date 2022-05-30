'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" },
    },
    imageUrl: { allowNull: false, type: DataTypes.TEXT },
    caption: { allowNull: false, type: DataTypes.STRING },
    favesCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    }
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, { foreignKey: "userId" });
    Photo.belongsToMany(models.User, {
      foreignKey: "photoId",
      through: "Fave",
      otherKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Photo.hasMany(models.Fave, {
      foreignKey: "photoId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Photo.hasMany(models.Comment, {
      foreignKey: "photoId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Photo;
};
