'use strict';


// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code


module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Comments';     // define table name in options object
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        photoId: 1,
        comment: "Looks so delicious!!",
      },
      {
        userId: 1,
        photoId: 6,
        comment: "Keep posting more!",
      },
      {
        userId: 1,
        photoId: 7,
        comment: "Wow, I wanna try!",
      },
      {
        userId: 1,
        photoId: 8,
        comment: "Dang!",
      },
      {
        userId: 1,
        photoId: 9,
        comment: "Yummy!",
      },
      {
        userId: 1,
        photoId: 10,
        comment: "Save some delicious food for the rest of us!",
      },
      {
        userId: 1,
        photoId: 11,
        comment: "OH MY GOSH",
      },
      {
        userId: 1,
        photoId: 12,
        comment: "I'm crying, that looks so good.",
      },
      {
        userId: 1,
        photoId: 13,
        comment: "Really nice pic!",
      },
      {
        userId: 2,
        photoId: 17,
        comment: "OMG",
      },
      {
        userId: 2,
        photoId: 18,
        comment: "YUMMY!",
      },
      {
        userId: 2,
        photoId: 19,
        comment: "What flavor?",
      },
      {
        userId: 3,
        photoId: 20,
        comment: "Sweet tooth!",
      },
      {
        userId: 3,
        photoId: 21,
        comment: "Geez!",
      },
      {
        userId: 3,
        photoId: 22,
        comment: "Drool",
      },
      {
        userId: 4,
        photoId: 23,
        comment: "I just woke up and haven't eaten and this is what I see... thanks, now I'm hungry.",
      },
      {
        userId: 4,
        photoId: 2,
        comment: "WOWZA!",
      },
      {
        userId: 4,
        photoId: 10,
        comment: "Beautiful!",
      },
      {
        userId: 5,
        photoId: 22,
        comment: "So nice!",
      },
      {
        userId: 5,
        photoId: 4,
        comment: "NICE",
      },
      {
        userId: 5,
        photoId: 21,
        comment: "Why you eat so good all the time!!",
      },
      {
        userId: 5,
        photoId: 3,
        comment: "Sigh..",
      },
      {
        userId: 6,
        photoId: 3,
        comment: "JEALOUS",
      },
      {
        userId: 6,
        photoId: 1,
        comment: "DELICIOUS",
      },
      {
        userId: 6,
        photoId: 2,
        comment: "absolute yums",
      },
      {
        userId: 6,
        photoId: 3,
        comment: "yesssss",
      },
      {
        userId: 3,
        photoId: 4,
        comment: "YES",
      },
      {
        userId: 4,
        photoId: 5,
        comment: "YESSSSS!",
      },
      {
        userId: 2,
        photoId: 6,
        comment: "YESSSSS",
      },
      {
        userId: 2,
        photoId: 7,
        comment: "Really pretty pic!",
      },
      {
        userId: 2,
        photoId: 8,
        comment: "Wow!",
      },
      {
        userId: 2,
        photoId: 9,
        comment: "Yummy",
      },
      {
        userId: 3,
        photoId: 10,
        comment: "I need to try one day!",
      },
      {
        userId: 2,
        photoId: 11,
        comment: "I need to try one day!",
      },
      {
        userId: 6,
        photoId: 3,
        comment: "BEAUTIFUL",
      },
      {
        userId: 6,
        photoId: 4,
        comment: "You blessin my feed!",
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Comments';     // define table name in options object
    return queryInterface.bulkDelete(options); // pass in options object here
  }
};
