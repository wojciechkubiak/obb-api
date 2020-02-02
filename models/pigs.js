const Sequelize = require("sequelize");

const sequelize = require("../utility/connection");

const Pigs = sequelize.define("pigs", {
  idPen: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "pens",
      key: "id"
    }
  },
  id: {
    type: Sequelize.CHAR(50),
    allowNull: false,
    primaryKey: true
  },
  pigGender: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  pigShoppingDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  pigShoppingPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pigSaleDate: {
    type: Sequelize.DATE,
    allowNull: true
  },
  pigSellingCost: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  pigDeathDate: {
    type: Sequelize.DATE,
    allowNull: true
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = Pigs;