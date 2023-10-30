'use strict';
const bcrypt = require('bcryptjs');


// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code


module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Users';     // define table name in options object
    return queryInterface.bulkInsert(options, [
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
    // const Op = Sequelize.Op;
    options.tableName = 'Users';     // define table name in options object
    return queryInterface.bulkDelete(options, 
      // {
      //   username: {
      //     [Op.in]: [
      //       "demo-lition",
      //       "grace_chi",
      //       "mark_the_foodie",
      //       "jessi_eats",
      //       "sushi_lover",
      //       "lazy_egg",
      //     ], }
      // }, {}
    );
  }
};
