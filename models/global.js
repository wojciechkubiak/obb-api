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
        allowNull: true
    },
    h_two_s: {
        type: Sequelize.SMALLINT,
        allowNull: true
    },
    co_two: {
        type: Sequelize.SMALLINT,
        allowNull: true
    },
    temperature: {
        type: Sequelize.SMALLINT,
        allowNull: true
    },
    wetness: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }    
});

module.exports = GlobalMeasures;