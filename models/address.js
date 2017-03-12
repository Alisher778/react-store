'use strict';
module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define('Address', {
    user_id: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    street: DataTypes.STRING,
    apartment: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    phone: DataTypes.STRING,
    note: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Address;
};