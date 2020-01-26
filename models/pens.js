const Sequelize = require('sequelize');

const sequelize = require('../utility/connection');

const Pens = sequelize.define('pens', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    size: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    isolated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = Pens;