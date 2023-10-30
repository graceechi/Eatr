'use strict';


// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code


module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Photos';     // define table name in options object
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        imageUrl: "https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        caption: "It's a good day to have ramen!",
        favesCount: 72
      },
      {
        userId: 2,
        imageUrl: "https://images.unsplash.com/photo-1599458912710-af0b63aa974f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Tried out this new soba noodle restaurant! Really good!",
        favesCount: 89
      },
      {
        userId: 1,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/47-omakase.jpg",
        caption: "One of the best sushi places I have ever been to!",
        favesCount: 36
      },
      {
        userId: 1,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/32-octopus-at-bay.jpg",
        caption: "Octopus at bay!",
        favesCount: 43
      },
      {
        userId: 5,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/20-iced-tea-rose-syrup.jpg",
        caption: "Iced tea rose syrup",
        favesCount: 55
      },
      {
        userId: 6,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/13-bruschetta.jpg",
        caption: "Bruschetta is the way to my heart",
        favesCount: 70
      },
      {
        userId: 2,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/10-sushi-tower.jpg",
        caption: "Sushi tower wow",
        favesCount: 67
      },
      {
        userId: 6,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/15-sushi-rolls.jpg",
        caption: "Daily dose of sushi",
        favesCount: 38
      },
      {
        userId: 6,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/18-meat-pasta.jpg",
        caption: "Recipe coming soon onto my website!",
        favesCount: 56
      },
      {
        userId: 5,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/36-soup-bread.jpg",
        caption: "A comforting meal is needed",
        favesCount: 45
      },
      {
        userId: 5,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/37-strawberry-topped-bread.jpg",
        caption: "Strawberry-topped banana bread! Recipe on my website!",
        favesCount: 81
      },
      {
        userId: 5,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/30-santorini-food.jpg",
        caption: "Food just tastes better with a nice view",
        favesCount: 64
      },
      {
        userId: 3,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/31-korean-comfort.jpg",
        caption: "Korean comfort food is delicious, no cap!",
        favesCount: 46
      },
      {
        userId: 1,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/38-bruschetta.jpg",
        caption: "Salmon bruschetta",
        favesCount: 55
      },
      {
        userId: 2,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/22-fig-thyme-cocktail.jpg",
        caption: "Fig thyme cocktail, very unique",
        favesCount: 66
      },
      {
        userId: 1,
        imageUrl: "https://images.unsplash.com/photo-1568044401410-a95b08960705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Had a good time today enjoying some chips and wine by the beach",
        favesCount: 52
      },
      {
        userId: 5,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/34-noodles.jpg",
        caption: "These noodles were so chewy!",
        favesCount: 49
      },
      {
        userId: 1,
        imageUrl: "https://images.unsplash.com/photo-1582263953546-5a1348a24312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        caption: "First time trying oysters and cavier",
        favesCount: 98
      },
      {
        userId: 3,
        imageUrl: "https://images.unsplash.com/photo-1571167366136-b57e07761625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        caption: "Super flavorful",
        favesCount: 66
      },
      {
        userId: 4,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/42-honey-toast.jpg",
        caption: "Breakfast anyone?",
        favesCount: 77
      },
      {
        userId: 1,
        imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Insane",
        favesCount: 82
      },
      {
        userId: 2,
        imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Made strawberry cupcakes for a friend's birthday!",
        favesCount: 75
      },
      {
        userId: 6,
        imageUrl: "https://images.unsplash.com/photo-1579372785655-a81b19e99b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        caption: "Afternoon tea party",
        favesCount: 53
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Photos';     // define table name in options object
    return queryInterface.bulkDelete(options);
  }
};
