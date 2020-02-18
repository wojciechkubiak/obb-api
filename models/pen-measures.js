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
    allowNull: true
  },
  dosatron: {
    type: Sequelize.SMALLINT,
    allowNull: true
  },
  addition: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  forage: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  forageQtyUsed: {
    type: Sequelize.FLOAT(5),
    allowNull: true
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = PenMeasures;
