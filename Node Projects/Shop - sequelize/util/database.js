const Sequelize = require('sequelize');

const sequelize = new Sequelize('pro_2', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize
