const Sequelize = require('sequelize');

const sequelize = new Sequelize('pro_3', 'root', 'nodecomplete', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
