const { sequelize } = require('./db/models');

// equivalent to in raw SQL:
// 'CREATE SCHEMA IF NOT EXISTS <your-schema-name>;'

sequelize.showAllSchemas({ logging: false }).then(async (data) => {
  if (!data.includes(process.env.SCHEMA)) {
    await sequelize.createSchema(process.env.SCHEMA);
  }
});