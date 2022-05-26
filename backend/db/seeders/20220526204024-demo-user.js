'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'grace@gmail.com',
        username: 'grace_chi',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'mark@gmail.com',
        username: 'mark_the_foodie',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'jessi@gmail.com',
        username: 'jessi_eats',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'sushilover@gmail.com',
        username: 'sushi_lover',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'egg@gmail.com',
        username: 'lazy_egg',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: {
        [Op.in]: [
          "demo-lition",
          "grace_chi",
          "mark_the_foodie",
          "jessi_eats",
          "sushi_lover",
          "lazy_egg",
        ], }
    }, {});
  }
};
