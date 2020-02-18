const Sequelize = require("sequelize");

const sequelize = require("../utility/connection");

const Forage = sequelize.define("forages", {
  idPen: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "pens",
      key: "id"
    }
  },
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fgAbout: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  fgQty: {
    type: Sequelize.FLOAT(10),
    allowNull: false
  },
  fgPrice: {
    type: Sequelize.FLOAT(5),
    allowNull: false
  },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  producer: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  expiration: {
    type: Sequelize.DATE,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = Forage;
