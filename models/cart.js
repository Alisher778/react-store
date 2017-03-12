'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define('Cart', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    product_image: DataTypes.TEXT,
    product_info: DataTypes.TEXT,
    product_price: DataTypes.STRING,
    product_quantity: DataTypes.INTEGER,
    product_color: DataTypes.STRING,
    product_size: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cart;
};