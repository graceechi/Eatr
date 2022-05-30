'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" },
    },
    imageId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Photos" },
    },
    comment: { type: DataTypes.STRING, allowNull: false }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Photo, { foreignKey: "photoId" });
  };
  return Comment;
};
