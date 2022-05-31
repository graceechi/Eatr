'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        userId: 1,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/05-dumplings.jpg",
        caption: "dumpling day!",
        favesCount: 72
      },
      {
        userId: 2,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/06-charcuterie.jpg",
        caption: "charcuterie board is a personality",
        favesCount: 67
      },
      {
        userId: 2,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/07-kith.jpg",
        caption: "kith me ice cream",
        favesCount: 89
      },
      {
        userId: 3,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/08-cheesecake.jpg",
        caption: "dessert lover <3",
        favesCount: 36
      },
      {
        userId: 4,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/09-choco-layer-cake.jpg",
        caption: "celebrating me",
        favesCount: 43
      },
      {
        userId: 5,
        imageUrl: "https://flavr-app.s3.us-east-2.amazonaws.com/photos/10-sushi-tower.jpg",
        caption: "yummy sushi tower!",
        favesCount: 55
      },
      // {
      //   userId: 6,
      //   imageUrl: "/photos/11-tacos.jpg",
      //   caption: "brunch anyone?",
      //   favesCount: 70
      // },
      // {
      //   userId: 6,
      //   imageUrl: "/photos/12-curry.jpg",
      //   caption: "best curry I've ever had",
      //   favesCount: 38
      // },
      // {
      //   userId: 6,
      //   imageUrl: "/photos/13-bruschetta.jpg",
      //   caption: "bruschetta board!! so good!!",
      //   favesCount: 56
      // },
      // {
      //   userId: 3,
      //   imageUrl: "/photos/14-fancy-drizzle.jpg",
      //   caption: "such a small fancy portion haha!",
      //   favesCount: 59
      // },
      // {
      //   userId: 4,
      //   imageUrl: "/photos/15-sushi-rolls.jpg",
      //   caption: "essentials",
      //   favesCount: 77
      // },
      // {
      //   userId: 5,
      //   imageUrl: "/photos/16-macarons.jpg",
      //   caption: "sweet tooth",
      //   favesCount: 45
      // },
      // {
      //   userId: 5,
      //   imageUrl: "/photos/17-ramen.jpg",
      //   caption: "superior ramen",
      //   favesCount: 81
      // },
      // {
      //   userId: 5,
      //   imageUrl: "/photos/18-meat-pasta.jpg",
      //   caption: "delicious! recipe coming soon",
      //   favesCount: 64
      // },
      // {
      //   userId: 3,
      //   imageUrl: "/photos/19-steak.jpg",
      //   caption: "dinner at home!",
      //   favesCount: 46
      // },
      // {
      //   userId: 1,
      //   imageUrl: "/photos/20-iced-tea-rose-syrup.jpg",
      //   caption: "iced tea rose syrup",
      //   favesCount: 55
      // },
      // {
      //   userId: 6,
      //   imageUrl: "/photos/21-indian-curry.jpg",
      //   caption: "on today's menu: Indian curry",
      //   favesCount: 48
      // },
      // {
      //   userId: 2,
      //   imageUrl: "/photos/22-fig-thyme-cocktail.jpg",
      //   caption: "fig thyme cocktail, very unique",
      //   favesCount: 66
      // },
      // {
      //   userId: 3,
      //   imageUrl: "/photos/23-fancy-shrimp.jpg",
      //   caption: "fancy fancy",
      //   favesCount: 58
      // },
      // {
      //   userId: 5,
      //   imageUrl: "/photos/24-cocktail.jpg",
      //   caption: "cocktail hour again",
      //   favesCount: 49
      // },
      // {
      //   userId: 2,
      //   imageUrl: "/photos/25-cocktail.jpg",
      //   caption: "cocktail hour again",
      //   favesCount: 67
      // },
      // {
      //   userId: 5,
      //   imageUrl: "/photos/26-bibimbap.jpg",
      //   caption: "I love Korean food!",
      //   favesCount: 73
      // },
      // {
      //   userId: 6,
      //   imageUrl: "/photos/27-american-dining.jpg",
      //   caption: "fine dining",
      //   favesCount: 53
      // },
      // {
      //   userId: 6,
      //   imageUrl: "/photos/28-cava-bowl.jpg",
      //   caption: "tasty bowl",
      //   favesCount: 63
      // },
      // {
      //   userId: 2,
      //   imageUrl: "/photos/29-french-toast.jpg",
      //   caption: "sweet brekkie",
      //   favesCount: 52
      // },
      // {
      //   userId: 1,
      //   imageUrl: "/photos/30-santorini-food.jpg",
      //   caption: "Santorini views makes the food even better",
      //   favesCount: 98
      // },
      // {
      //   userId: 3,
      //   imageUrl: "/photos/31-korean-comfort.jpg",
      //   caption: "comfort food",
      //   favesCount: 66
      // },
      // {
      //   userId: 1,
      //   imageUrl: "/photos/32-octopus-at-bay.jpg",
      //   caption: "octopus at bay",
      //   favesCount: 82
      // },
      // {
      //   userId: 2,
      //   imageUrl: "/photos/33-brunch.jpg",
      //   caption: "mmmm yum",
      //   favesCount: 75
      // },
      // {
      //   userId: 3,
      //   imageUrl: "/photos/34-noodles.jpg",
      //   caption: "happy noodle day!",
      //   favesCount: 59
      // },
      // {
      //   userId: 4,
      //   imageUrl: "/photos/35-sushi.jpg",
      //   caption: "daily dose of sushi",
      //   favesCount: 60
      // },
      // {
      //   userId: 6,
      //   imageUrl: "/photos/36-soup-bread.jpg",
      //   caption: "cozy day",
      //   favesCount: 60
      // },
      // {
      //   userId: 2,
      //   imageUrl: "/photos/37-strawberry-topped-bread.jpg",
      //   caption: "launching my recipe website soon!",
      //   favesCount: 56
      // },
      // {
      //   userId: 1,
      //   imageUrl: "/photos/38-bruschetta.jpg",
      //   caption: "it's a bruschetta day",
      //   favesCount: 56
      // },
      // {
      //   userId: 1,
      //   imageUrl: "/photos/39-cocktail.jpg",
      //   caption: "this was so good",
      //   favesCount: 62
      // },
      // {
      //   userId: 2,
      //   imageUrl: "/photos/40-ice-cream-bar.jpg",
      //   caption: "purple is my favorite color",
      //   favesCount: 53
      // },
      // {
      //   userId: 4,
      //   imageUrl: "/photos/41-wraps.jpg",
      //   caption: "flavorful!!",
      //   favesCount: 56
      // },
      // {
      //   userId: 1,
      //   imageUrl: "/photos/42-honey-toast.jpg",
      //   caption: "so good",
      //   favesCount: 56
      // },
      // {
      //   userId: 5,
      //   imageUrl: "/photos/43-pizza-bowl.jpg",
      //   caption: "cheese is everything",
      //   favesCount: 61
      // },
      // {
      //   userId: 6,
      //   imageUrl: "/photos/44-chocolate-cookie.jpg",
      //   caption: "chocolate is my weakness",
      //   favesCount: 61
      // },
      // {
      //   userId: 5,
      //   imageUrl: "/photos/45-pb-choco-cup.jpg",
      //   caption: "woah peanut chocolate butter cup",
      //   favesCount: 54
      // },
      // {
      //   userId: 1,
      //   imageUrl: "/photos/46-orange-sparkling.jpg",
      //   caption: "taste testing!",
      //   favesCount: 65
      // },
      // {
      //   userId: 1,
      //   imageUrl: "/photos/47-omakase.jpg",
      //   caption: "perfection",
      //   favesCount: 85
      // },
      // {
      //   userId: 4,
      //   imageUrl: "/photos/48-flower-soup.jpg",
      //   caption: "perfection",
      //   favesCount: 74
      // },
      // {
      //   userId: 2,
      //   imageUrl: "/photos/49-acai-bowl.jpg",
      //   caption: "healthy snack",
      //   favesCount: 57
      // },
      // {
      //   userId: 4,
      //   imageUrl: "/photos/50-bruschetta.jpg",
      //   caption: "breakfast",
      //   favesCount: 65
      // },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Photos", null, {});
  }
};
