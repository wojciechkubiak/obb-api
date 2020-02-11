const Sequelize = require("sequelize");

const sequelize = require("../utility/connection");

const PenMeasures = sequelize.define("penMeasures", {
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
    autoIncrement: true,
    primaryKey: true
  },
  measureDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  measureTime: {
    type: Sequelize.TIME,
    allowNull: false
  },
  breakdown: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  dosatron: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  addition: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  forage: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  forageQtyUsed: {
    type: Sequelize.FLOAT(5),
    allowNull: false
  },
  water: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = PenMeasures;
