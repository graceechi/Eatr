'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Faves', [
      {userId: 1, photoId: 2, createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, photoId: 5, createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, photoId: 6, createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, photoId: 12, createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, photoId: 15, createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, photoId: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, photoId: 3, createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, photoId: 4, createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, photoId: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, photoId: 3, createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, photoId: 4, createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, photoId: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 4, photoId: 3, createdAt: new Date(), updatedAt: new Date()},
      {userId: 4, photoId: 4, createdAt: new Date(), updatedAt: new Date()},
      {userId: 4, photoId: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 5, photoId: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 5, photoId: 2, createdAt: new Date(), updatedAt: new Date()},
      {userId: 6, photoId: 4, createdAt: new Date(), updatedAt: new Date()},
      {userId: 6, photoId: 5, createdAt: new Date(), updatedAt: new Date()},
      {userId: 6, photoId: 2, createdAt: new Date(), updatedAt: new Date()},
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Faves', null, {});
  }
};
