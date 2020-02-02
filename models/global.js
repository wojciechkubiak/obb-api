const Sequelize = require('sequelize');

const sequelize = require('../utility/connection');

const GlobalMeasures = sequelize.define('globalMeasures', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
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
    nhThree: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    hTwoS: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    coTwo: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    temperature: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    wetness: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = GlobalMeasures;