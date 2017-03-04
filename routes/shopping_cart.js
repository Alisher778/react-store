

const Cart = sequelize.define('Cart', {
  userId: Sequelize.INTEGER,
  productId: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER ,
  color: Sequelize.STRING
})