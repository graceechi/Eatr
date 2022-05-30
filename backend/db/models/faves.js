'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fave = sequelize.define('Fave', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" },
    },
    photoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Photos" },
    }
  }, {});
  Fave.associate = function(models) {
    // associations can be defined here
    Fave.belongsTo(models.User, { foreignKey: "userId" });
    Fave.belongsTo(models.Photo, { foreignKey: "photoId" });
  };
  return Fave;
};
