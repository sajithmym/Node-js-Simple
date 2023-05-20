const Sequelize = require('sequelize');

const dbm = require('../util/database');

const prodect = dbm.define('product',{
  id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    primaryKey : true,
    allowNull : false
  },
  title : Sequelize.STRING,
  price : {
    type : Sequelize.DOUBLE,
    allowNull : false
  },
  imgUrl : {
    type : Sequelize.STRING,
    allowNull : false
  },
  description : Sequelize.STRING
})

module.exports = prodect