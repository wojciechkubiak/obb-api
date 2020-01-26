const Sequelize = require('sequelize');

const sequelize = require('../utility/connection');

const GlobalMeasures = sequelize.define('global_measures', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    measure_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    measure_time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    nh_three: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    h_two_s: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    co_two: {
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