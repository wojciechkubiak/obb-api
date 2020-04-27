const Sequelize = require("sequelize");

const sequelize = require("../utility/connection");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
      type: Sequelize.TEXT,
      allowNull: false
  },
  password: {
      type: Sequelize.TEXT,
      allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = User;
