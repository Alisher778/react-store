const Sequelize = require('sequelize');
const databaseURL   = 'sqlite://database.sqlite3';
const sequelize     = new Sequelize(process.env.DATABASE_URL || databaseURL);

const Product = sequelize.define('Product', {
  name: Sequelize.STRING,
  image: Sequelize.TEXT,
  description: Sequelize.TEXT,
  price: Sequelize.STRING
});

module.exports = Product;